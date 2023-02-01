import TelegramBot from "node-telegram-bot-api";
import startButtons from "./buttons/startButtons";
import {firstAnonymousButtons, secondAnonymousButtons, thirdAnonymousButtons} from "./buttons/anonymousButtons";
import { firstConnectButtons } from "./buttons/connectButtons";
require('dotenv').config()
const token:any = process.env.TELEGRAM_BOT_TOKEN;

const Tbot:any = new TelegramBot(token, {polling: true});

Tbot.onText(/\/start/, (msg:any):void => {
    const userData = msg.from
    const current = new Date()
    console.log({...userData, log: `Start Bot in: ${current}`})

    Tbot.sendMessage(msg.from.id, `حله!

    چه کاری برات انجام بدم؟`, {
        reply_markup: {
            keyboard: startButtons
        }
    })
});

Tbot.on('message', (msg:any):void => {

    if(msg.text == '🔗 به یه ناشناس وصلم کن!') {
        const userData = msg.from
        const current = new Date()
        console.log({...userData, log: `Send ${msg.text} in: ${current}`})
        Tbot.sendMessage(msg.from.id, `${msg.from.first_name} جنسیتت چیه ؟
        
        ⚙️ این تنظیم در آینده قابل تغییر نیست!`, {
            reply_markup: {
                keyboard: firstAnonymousButtons
            } 
        })
    }

    if(msg.text == '👨🏻 پسرم' || msg.text == '👩🏻 دخترم') {
        const userData = msg.from
        const current = new Date()
        console.log({...userData, log: `Send ${msg.text} in: ${current}`})
        Tbot.sendMessage(msg.from.id, `برات مهمه مخاطبت پسر باشه یا دختر؟`, {
            reply_markup: {
                keyboard: secondAnonymousButtons
            } 
        })
    }

    if ((msg.text == 'پسر باشه 👨🏻' || msg.text == 'دختر باشه 👩🏻') || msg.text == 'مهم نیست') {
        const userData = msg.from
        const current = new Date()
        console.log({...userData, log: `Send ${msg.text} in: ${current}`})
        Tbot.sendMessage(msg.from.id, `در حال اتصال ... 
        اگر تا حداکثر یک دقیقه آینده پیامی ارسال نشد دوباره تلاش کنید`, {
            reply_markup: {
                keyboard: thirdAnonymousButtons
            } 
        })
    }
    
    if(msg.text == '💌 به مخاطب خاصم وصلم کن!') {
        const userData = msg.from
        const current = new Date()
        console.log({...userData, log: `Send ${msg.text} in: ${current}`})
        Tbot.sendMessage(msg.from.id, `برای اینکه بتونم به مخاطب خاصت بطور ناشناس وصلت کنم، یکی از این ۲ کار رو انجام بده:

        راه اول 👈 : Username@ یا همون آی‌دی تلگرام اون شخص رو الان وارد ربات کن!
        
        راه دوم 👈 : الان یه پیام متنی از اون شخص به این ربات فوروارد کن تا ببینم عضو هست یا نه!`)
    }

    if (msg.text == 'انصراف') {
        const userData = msg.from
        const current = new Date()
        console.log({...userData, log: `Start Bot in: ${current}`})
        Tbot.sendMessage(msg.from.id, `حله!
    
        چه کاری برات انجام بدم؟`, {
            reply_markup: {
                keyboard: startButtons
            }
        })
    }
})