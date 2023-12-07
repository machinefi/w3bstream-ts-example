import { W3bstreamClient } from "w3bstream-client-js";

const PROJECT_ID = ""; // eth_0xe0895ba7c3545c41324e3605f9bab95816e8ba6a_demo01
const API_KEY = ""; // w3b_......
const url = `https://devnet-prod.w3bstream.com/api/w3bapp/event/${PROJECT_ID}`;

const client = new W3bstreamClient(url, API_KEY);

const msg = {
  header: {
    device_id: "device_001",
    event_type: "DEFAULT",
    timestamp: Date.now(),
  },
  payload: {
    temperature: 25,
  },
};
const msgs = [msg];

export async function main() {
  try {
    client.publishEvents(msgs).subscribe((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
