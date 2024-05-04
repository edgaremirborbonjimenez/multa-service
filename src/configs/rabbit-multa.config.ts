import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";

export const RabbitMultaConfig = RabbitMQModule.forRoot(RabbitMQModule,{
    exchanges:[
        {
            name: 'notifier',
            type: 'topic'
        }
    ],
    uri: 'amqp://localhost:5672'
});