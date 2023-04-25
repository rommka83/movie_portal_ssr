import React, { HTMLAttributes } from "react";
import styles from "./sectiontitle.module.css";
import classNames from "classnames";

export const SectionTitle = React.memo<SectionTitleProps>(
	({ className, children, ...props }) => {
		return (
			<h3 {...props} className={classNames(styles.sectionTitle, className)}>
				{children}
			</h3>
		);
	}
);

type SectionTitleProps = HTMLAttributes<HTMLHeadingElement> & {
	className?: string;
};
