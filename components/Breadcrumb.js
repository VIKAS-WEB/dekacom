import Image from "next/image";
import Link from "next/link";

const Breadcrumb = ({ crumbs }) => {
  return (
    <div className="w-full bg-[#F4F4F7]  hidden lg:block md:block">
      <div className="mt-2 mx-auto max-w-8xl w-[90%] breadcrumb flex flex-row items-center  px-6 py-4">
        {crumbs.map((crumb, index) => (
          <div key={index} className="flex flex-row items-center">
            <Link href={crumb.url}>{crumb.label}</Link>
            {index < crumbs.length - 1 && (
              <span>
                <Image
                  src="/assets/img/divider.png"
                  className="w-3 mx-1"
                  alt="Home"
                  width={12}
                  height={12}
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
