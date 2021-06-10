import { Algorithm, verify as verifyJwt, decode as parseJwt } from "jsonwebtoken";
import assert from "assert";
import { KeyValue } from "@de/dtos/keyval.dto";

function decodeBase64(encodedString: string): string {
  return Buffer.from(encodedString, "base64").toString();
}

function decodeJwt(jwt: string, shouldVerify = true, publicKey?: string, algorithm?: Algorithm): KeyValue | null {
  if (shouldVerify) {
    assert.ok(publicKey, "Public was not given. Cannot verify JWT");
    assert.ok(algorithm, "Algorithm was not given. Cannot verify JWT");
    return doDecodeJwt(jwt, publicKey, algorithm);
  } else {
    return doDecodeJwtWoVerify(jwt);
  }
}

function doDecodeJwt(jwt: string, publicKey: string | Buffer, algorithm: Algorithm): KeyValue {
  return verifyJwt(jwt, publicKey, {
    algorithms: [algorithm],
  }) as KeyValue;
}

function doDecodeJwtWoVerify(jwt: string): KeyValue | null {
  const json = parseJwt(jwt);

  return json ? (json as KeyValue) : null;
}

export default {
  decodeBase64,
  decodeJwt,
};
