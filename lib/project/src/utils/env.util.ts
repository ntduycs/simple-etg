/* eslint-disable  @typescript-eslint/no-explicit-any */
function getEnvironment(key: string, defaultValue: string): string {
  const value = process.env[key];

  if (!value || value === "") {
    return defaultValue;
  }

  return value;
}

function getRequiredEnvironment(key: string): string {
  const value = process.env[key];

  if (!value || value === "") {
    throw Error("Missing required environment variable - " + key);
  }

  return value;
}

export default {
  getEnvironment,
  getRequiredEnvironment,
};
