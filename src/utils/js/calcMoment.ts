import moment from 'moment';

export function calcMoment(created: number = 0) {
  moment.locale('ru');

  return created;
}
