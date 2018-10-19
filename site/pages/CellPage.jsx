import Markdown from '../components/Markdown';

export default class Page extends Markdown {
  document = () => {
    return {
      document: require('../../components/cell/demo.md'),
      className: 'cell-page',
    };
  }
}
