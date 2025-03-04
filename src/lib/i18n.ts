import { intl } from "@/config/intl";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !intl.locales.includes(locale as any)) {
    locale = intl.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../langs/${locale}.json`)).default,
  };
});
