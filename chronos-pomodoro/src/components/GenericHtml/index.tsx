import styles from './styles.module.css';

type GenericHtmlProps = {
  children?: React.ReactNode;
};

export function GenericHtml({ children }: GenericHtmlProps) {
  return <section className={styles.genericHtml}>{children}</section>;
}
