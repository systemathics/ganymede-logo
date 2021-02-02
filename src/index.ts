import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the ganymede-logo extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'ganymede-logo',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension ganymede-logo is activated!');
    const style = 'ganymede-logo/index.css';

    manager.register({
      name: 'ganymede-logo',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
