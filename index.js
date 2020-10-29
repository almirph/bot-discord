const Discord = require("discord.js");
const config = require("./config.json");
const cron = require("cron");

const client = new Discord.Client();

const mensagem =
  "Boa Sexta! Não esqueça de lançar suas horas no redmine \n http://104.196.207.133/";

const job = new cron.CronJob("20 * * * * *", () =>
  client.guilds.cache.forEach((guild) => {
    const channel = guild.channels.cache.find(
      (channel) => channel.name === "geral"
    );
    if (channel) {
      channel.send(mensagem);
    }
  })
);

client.login(config.BOT_TOKEN).then(() => {
  job.start();
});
