import sanityClient from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-05-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
});

// IMAGE CROP/HOTSPOT
// https://www.sanity.io/docs/image-url
// const builder = imageUrlBuilder(client);
// export const urlFor = source => builder.image(source);