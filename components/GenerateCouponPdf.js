import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import QRCode from "qrcode";

export default function GenerateCouponPdf({ id, code, coupon }) {
  const [qrcodeDataUrl, setQRCodeDataUrl] = useState(null);
  const validity = coupon[0].validity[0].$;
  const formattedStartDate = formatDateToShortDate(validity.start);
  const formattedEndDate = formatDateToShortDate(validity.end);

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const dataUrl = await QRCode.toDataURL(code);
        setQRCodeDataUrl(dataUrl);
      } catch (err) {
        console.error(err);
      }
    };
    generateQRCode();
  }, [code]);
  function formatDateToShortDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <Document title={"Coupon Numéro : " + id}>
      <Page>
        <View
          style={{
            paddingTop: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              width: "90%",
              gap: 20,
            }}
          >
            <Image
              alt="logo"
              src={"https://annonceurs.ticket-promo.com/ws/images/logo.png"}
              style={{
                width: "8%",
              }}
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 22, paddingBottom: 24 }}
            >
              Merci d’avoir téléchargé ce coupon de réduction !
            </Text>
          </View>
          <Text style={{ fontSize: 18, paddingBottom: 8 }}>
            Date de validité :
          </Text>
          <Text style={{ fontSize: 18, paddingBottom: 8 }}>
            Du {formattedStartDate} au {formattedEndDate}
          </Text>
          <Image
            alt="coupon photo"
            src={
              "https://annonceurs.ticket-promo.com/ws/images/coupons/" +
              id +
              ".jpg"
            }
            style={{
              width: "60%",
            }}
          />
          <Text style={{ fontSize: 18, paddingBottom: 8, paddingTop: 24 }}>
            Votre QR Code à présenter en caisse :
          </Text>
          <View>
            {qrcodeDataUrl && (
              <Image
                alt="qr image"
                src={`data:image/png;base64,${qrcodeDataUrl.split(",")[1]}`}
                style={{ height: 80 }}
              />
            )}
          </View>
          <Text style={{ fontSize: 14 }}>Votre Code Promo:</Text>
          <Text style={{ fontSize: 14 }}>{code}</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              paddingBottom: 8,
              paddingTop: 36,
            }}
          >
            Comment utiliser ce coupon?
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 10,
                alignItems: "center",
                width: "25%",
                height: 100,
              }}
            >
              <Text
                style={{ fontSize: 14, color: "#00A6A3", fontWeight: "bold" }}
              >
                Étape 1
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Présenter ce coupon en caisse
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 10,
                alignItems: "center",
                width: "25%",
                height: 100,
              }}
            >
              <Text
                style={{ fontSize: 14, color: "#00A6A3", fontWeight: "bold" }}
              >
                Étape 2
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Flash du QR Code
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 10,
                alignItems: "center",
                width: "25%",
                height: 100,
              }}
            >
              <Text
                style={{ fontSize: 14, color: "#00A6A3", fontWeight: "bold" }}
              >
                Étape 3
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Réduction validée !
              </Text>
            </View>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              paddingTop: 16,
            }}
          >
            *Vous n{"'"}avez pas encore de compte ? Il vous suffit de créer
            votre compte consommateur sur Ticket Pormo ! (retrouver le
            formulaire d{"'"}inscription sur la page de connexion)
          </Text>
        </View>
      </Page>
    </Document>
  );
}
