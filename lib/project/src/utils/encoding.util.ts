import { Algorithm, sign as signJwt } from "jsonwebtoken";
import { KeyValue } from "@de/dtos/keyval.dto";

function encodeBase64(plainString: string): string {
  return Buffer.from(plainString).toString("base64");
}

function encodeJwt(json: KeyValue, secretKey: string, algorithm: Algorithm, kid?: string, passphrase = ""): string {
  const options = {
    algorithm: algorithm,
  } as KeyValue;

  if (kid) {
    options.keyid = kid;
  }

  return signJwt(
    json,
    {
      key: secretKey,
      passphrase,
    },
    options,
  );
}

export default {
  encodeBase64,
  encodeJwt,
};
