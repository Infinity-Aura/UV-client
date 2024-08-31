import { ActiveUserInterface } from './active-user.interface';
import { TokensInterface } from './tokens.interface';

export interface AuthResponseInterface {
  user: ActiveUserInterface;
  tokens: TokensInterface;
}
