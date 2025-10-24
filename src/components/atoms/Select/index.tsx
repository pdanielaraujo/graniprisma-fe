/*

    Implement this when compatibility for all browsers is available
    https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select#what_features_comprise_a_customizable_select

*/

import styles from "./Select.module.css";
import type { TSelectProps } from "./types";

export const Select = ({ id, name, options }: TSelectProps) => {
  console.log(options);

  return (
    <select name={name} id={id} className={styles.root}>
      <option value={undefined}>Selecionar opção</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
  );
};
