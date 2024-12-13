import { Module } from '@nestjs/common';
import { ConversationGateway } from './conversation/conversation.gateway';

@Module({
  providers: [ConversationGateway],
})
export class AppModule { }
