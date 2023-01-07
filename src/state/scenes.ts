import { BehaviorSubject } from 'rxjs';
import { Scene } from '../types';

export const $scene = new BehaviorSubject<Scene>('main')
