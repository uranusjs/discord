export const replace = (str: string) => {
  return str
    .replace(/([A-Za-z0-9]{212})/g, ':token-interaction')
    .replace(/(([0-9]{18,22}))/g, ':snowflake')
    .replace(/([a-f0-9]{32})/g, ':hash-md5')
    .replace(/([A-Za-z0-9]{24}\.[A-Za-z0-9]{6}\.[A-Za-z0-9]{27})/g, ':token')
    .replace(/([A-Za-z0-9_-]{68})/g, ':webhook')
    .replace(/(true)/g, ':boolean')
    .replace(/(false)/g, ':boolean')
}




