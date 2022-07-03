//>>>>>>>>   Импорт стилей   <<<<<<<<<
import './styles/styles.scss';
import { ContextMenu } from './menu';

//>>>>>>>>   Импорт модулей   <<<<<<<<<
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shape.module';
import { CustomMessage } from './modules/custom_message.module';
import { BackgroundModule } from './modules/background.module';
import { Soundmodule } from './modules/sound.module';
import { PARENT_HEIGHT, PARENT_WIDTH } from './modules/global';

//>>>>>>>>   Создание меню   <<<<<<<<<
const contextMenu = new ContextMenu('ul');
contextMenu.add(new ShapeModule('shape', 'Создать фигуру'));
contextMenu.add(new TimerModule('timer', 'Обратный отсчёт'));
contextMenu.add(new CustomMessage('custom-message', 'Кастомное сообщение'));
contextMenu.add(new Soundmodule('sound', 'Случайный звук'));
contextMenu.add(new ClicksModule('click', 'Счетчик кликов'));
contextMenu.add(new BackgroundModule('background', 'Фон'));

//>>>>>>>>   Отображение меню   <<<<<<<<<
const contentContainer = document.querySelector('.content');
contentContainer.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  contextMenu.open();
  contextMenu.setBorder(event);
});

//>>>>>>>>   Обработка выбранного пункта меню   <<<<<<<<<
contextMenu.el.addEventListener('click', (event) => {
  const { target } = event;
  const selectModule = target.dataset.type;
  const runApp = contextMenu.modules.find(
    (module) => module.type === selectModule
  );
  runApp.trigger();
  contextMenu.close();
  const previousContainer = document.querySelector('.active');
  if (previousContainer) {
    previousContainer.classList.remove('active');
  }
  const selectContainer = document.querySelector(`.${selectModule}`);
  selectContainer.classList.add('active');
});
