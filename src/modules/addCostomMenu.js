import { ContextMenu } from '../menu';
import { ShapeModule } from './shape.module';
import { TimerModule } from './timer.module';
import { CustomMessage } from './custom_message.module';
import { ClicksModule } from './clicks.module';
import { BackgroundModule } from './background.module';
import { Soundmodule } from './sound.module';

export const addCostomMenu = () => {
  const contextMenu = new ContextMenu('ul');
  contextMenu.add(new ShapeModule('shape', 'Создать фигуру'));
  contextMenu.add(new TimerModule('timer', 'Обратный отсчёт'));
  contextMenu.add(new CustomMessage('custom-message', 'Кастомное сообщение'));
  contextMenu.add(new Soundmodule('sound', 'Случайный звук'));
  contextMenu.add(new ClicksModule('click', 'Счетчик кликов'));
  contextMenu.add(new BackgroundModule('background', 'Фон'));
};
