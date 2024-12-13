import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ConversationGateway implements OnGatewayConnection, OnGatewayDisconnect {

  private readonly logger: Logger = new Logger(ConversationGateway.name)

  handleConnection(client: Socket) {
    // Futuramente, nessa parte haverá uma validação do token do usuário 
    this.logger.log(`User connected -> id: ${client.id}`)
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`User disconnected -> id: ${client.id}`)
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    this.logger.log(`id: ${client.id} -> sended message: ${payload}`)
    return 'Hello world!';
  }
}
