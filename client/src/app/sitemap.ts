import {MetadataRoute} from "next";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//     return [
//         {
//             url:`${process.env.SITE_URL}`,
//             lastModified: new Date(),
//         },
//         {
//             url:`${process.env.SITE_URL}/aboutus`,
//             lastModified: new Date(),
//         },
//         {
//             url:`${process.env.SITE_URL}/contacts`,
//             lastModified: new Date(),
//         },
//         {
//             url:`${process.env.SITE_URL}/advocateservice`,
//             lastModified: new Date(),
//         },
//         {
//             url:`${process.env.SITE_URL}/propertyservice`,
//             lastModified: new Date(),
//         },
//     ]
// }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const languages = ["ua", "ru", "en"];
    const staticPaths = ["", "aboutus", "contacts", "advocateservice", "propertyservice"];

    const sitemapEntries = staticPaths.flatMap((path) => 
        languages.map((lang) => ({
            url: `${process.env.SITE_URL}/${lang}${path ? `/${path}` : ""}`,
            lastModified: new Date(),
        }))
    );

    return sitemapEntries;
}