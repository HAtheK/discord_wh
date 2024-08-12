import "dotenv/config";
import { Webhook, MessageBuilder } from "discord-webhook-node";
import PRAssign from "./msg/pr-assign.js"; // PR 할당 현황을 리턴하는 함수

const hook = new Webhook(process.env.HOOK_URL); // this!