import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as jwt from 'jsonwebtoken'
import { curlMessage } from "./curlMessage";
import { privateKey } from "./privateKey";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

  if (!req.body) {
    context.res = {
      body: curlMessage
    }
    return;
  }

  const payload = JSON.stringify(req.body);

  context.res = {
    body: jwt.sign(payload, privateKey)
  };
};

export default httpTrigger;
