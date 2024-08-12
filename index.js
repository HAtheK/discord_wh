import "dotenv/config";
import { Webhook, MessageBuilder } from "discord-webhook-node";


const hook = new Webhook("https://discord.com/api/webhooks/1272544419375222814/wbEQYdX8BgcW7qMPfLkyCjUbnaAbbYo5C79p6xUorhFgbaorIeNvcW8vwz9ecpKk1IVb"); //process.env.HOOK_URL); // this!


async function sendMessage() {
    
    const embed = new MessageBuilder()
      .setTitle("오늘자 리뷰 할당 현황")     // (1) 제목
      .setColor("#00ff00")              // (2) 메시지창의 바 색상
      .setDescription(                  // (3) 설명
        "🌞 굿모닝 좋은 아침 🌞\n💪 오늘자 리뷰 할당 현황 알려드려요!"
      )
      .addField("할당 현황", "00")         // (4) 필드(제목, 내용)
      .addField(                        // (5) 필드(제목, 내용)
        "😉 유의사항",
        "* 당일 오전 9시 이전에 요청한 리뷰는 당일 오후 2시까지 리뷰 완료해주세요!\n* 리뷰가 늦어질 시 리뷰 요청자에게 DM으로 미리 알려주는 센스~!\n* 일부 인원에게 많은 리뷰가 가지 않게 골고루 리뷰를 걸어주세요"
      );
  
    hook.send(embed);
  }
  
  sendMessage();
