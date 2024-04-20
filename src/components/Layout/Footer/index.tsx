import SocialIcon from "@/components/Common/Icons/SocialIcon";
import { SocialNetworks } from "@/data/about";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer>
      <div className="flex w-full  flex-col items-center justify-between gap-10 overflow-hidden  sm:py-24">
        <div className="mt-10 flex justify-center space-x-10">
          {SocialNetworks.map((item, index) => (
            <Link
              key={item.name}
              target="__blank"
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <SocialIcon
                key={index}
                socialName={item.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>

        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} {t("companyName")}. <br />{" "}
          {t("rights")}
        </p>
      </div>
    </footer>
  );
}
