import { ContextMenu } from './menu';
import { ShapeModule } from './module/shape.module';
import { TimerModule } from './module/timer.module';
import { CustomMessage } from './module/custom_message.module';
import { ClicksModule } from './module/clicks.module';
import { BackgroundModule } from './module/background.module';
import { Soundmodule } from './module/sound.module';

export const addCustomMenu = () => {
  const contextMenu = new ContextMenu('ul');
  contextMenu.add(new ShapeModule('shape', 'Создать фигуру'));
  contextMenu.add(new TimerModule('timer', 'Обратный отсчёт'));
  contextMenu.add(new CustomMessage('custom-message', 'Кастомное сообщение'));
  contextMenu.add(new Soundmodule('sound', 'Случайный звук'));
  contextMenu.add(new ClicksModule('click', 'Счетчик кликов'));
  contextMenu.add(new BackgroundModule('background', 'Фон'));
};
