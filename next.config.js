/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = nextConfig;

/** swcMinify changed to false because otherwise the react-chartjs-2 did not work in production
 * https://stackoverflow.com/questions/73840076/error-rangeerror-minimumfractiondigits-value-is-out-of-range-with-chartjs-in
 */
