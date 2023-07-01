import {DefaultTheme} from 'react-native-paper';
import {generalFonts} from './generalFonts';

export const customFonts = {
  ...DefaultTheme.fonts,
  ...generalFonts,

  appBarHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  appBarCircleIconText: {
    fontSize: 6,
    fontWeight: 'bold',
  },
  appBarEditButton: {
    fontSize: 10,
    fontWeight: '600',
  },

  menuItemHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardFooter: {fontSize: 11, fontWeight: 'bold'},

  detailsHeader: {fontSize: 16, fontWeight: 'bold'},
  detailName: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  detailValue: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  notesSubHeader: {fontSize: 15, fontWeight: 'normal'},
  notesItemHistoryTitle: {fontSize: 12, fontWeight: '600'},
  notesItemHistoryDate: {
    fontSize: 8,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  notesItemHistoryDetail: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  inputText: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  inputTextPlaceHolder: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
};
