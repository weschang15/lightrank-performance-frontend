export const MAX_COLUMN_SIZE = 104;
export const MIN_COLUMN_SIZE = 60;
export const MAX_GUTTER_SIZE = 40;
export const MIN_GUTTER_SIZE = 36;

export const MAX_MARGIN = 40;
export const MIN_MARGIN = 32;

export const columns = (count, mobile = false) =>
  mobile
    ? MIN_COLUMN_SIZE * count + MIN_GUTTER_SIZE * count
    : MAX_COLUMN_SIZE * count + MAX_GUTTER_SIZE * count;
