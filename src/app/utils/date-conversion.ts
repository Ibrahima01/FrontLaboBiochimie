import * as moment  from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
export const formatDate = (date: Date, format: string) => {
    return moment(date).format(format);
}