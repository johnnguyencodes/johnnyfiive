import {createClient} from '@sanity/client';

const projectId = 'cczzkso6';
const dataset = 'production';
const apiVersion = '2023-12-25';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
