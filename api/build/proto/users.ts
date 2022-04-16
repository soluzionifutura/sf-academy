import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UsersClient as _usersPackage_UsersClient, UsersDefinition as _usersPackage_UsersDefinition } from './usersPackage/Users';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  usersPackage: {
    BuyRequest: MessageTypeDefinition
    BuyResponse: MessageTypeDefinition
    DepositRequest: MessageTypeDefinition
    DepositResponse: MessageTypeDefinition
    ListTransactionsRequest: MessageTypeDefinition
    ListTransactionsResponse: MessageTypeDefinition
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    SignupRequest: MessageTypeDefinition
    SignupResponse: MessageTypeDefinition
    Transaction: MessageTypeDefinition
    Users: SubtypeConstructor<typeof grpc.Client, _usersPackage_UsersClient> & { service: _usersPackage_UsersDefinition }
    WithdrawRequest: MessageTypeDefinition
    WithdrawResponse: MessageTypeDefinition
  }
}

