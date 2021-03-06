import React, { FC, useContext, useState } from "react";
import FormMetaContext from "context/Meta/FormMetaContext";
import useSWR from "swr";
import { Slider, InputNumber } from "antd";
import _ from "lodash";
import { jsonParse } from "@util/jsonParse";
import Atom_label from "./Atom_label";
import { getAtomValue, fieldHideShow, fieldDisableEnable } from "util/helper";
import { overrideTailwindClasses } from "tailwind-override";
import NumberFormat from "react-number-format";
type PropsType = {
	config: any;
	className?: any;
	labelClassName?: any;
	style?: any;
	rowIndex?: any;
	sectionConfig?: any;
};

const Atom_range_slider_maxmin: FC<PropsType> = ({
	config,
	className,
	labelClassName,
	style,
	rowIndex,
	sectionConfig,
}) => {
	const {
		processExpression,
		formDataInitData,
		handleChangeContext,
		processConfig,
		validData,
	} = useContext(FormMetaContext);
	const handlerChange = (e: any) => {
		const { paramrealpath } = config;
		handleChangeContext({
			name: paramrealpath,
			value: e,
			rowIndex,
		});
		setInputValue(e);
	};
	const [inputValue, setInputValue] = useState<any>();
	return (
		<div
			className={`${
				sectionConfig?.widgetnemgooReady?.labelPosition == "top"
					? `flex flex-col`
					: `grid grid-cols-2 gap-4`
			} ${
				config.isshow == "0"
					? "hidden"
					: fieldHideShow(config, processExpression) && "hidden"
			}`}
		>
			<Atom_label
				labelName={config.labelname}
				labelFor={config.paramname}
				isrequired={config.isrequired}
				styles=""
				className={`${labelClassName}`}
				sectionConfig={sectionConfig}
			/>

			<Slider
				value={getAtomValue(config, formDataInitData, processConfig, rowIndex)}
				min={parseInt(config.minvalue, 10)}
				max={parseInt(config.maxvalue, 10)}
				step={parseInt(config.minvalue, 10)}
				// tooltipVisible={true}
				onChange={handlerChange}
				className={overrideTailwindClasses(`  ${className}`)}
			/>
			<NumberFormat
				thousandsGroupStyle="thousand"
				value={
					typeof inputValue === "number"
						? inputValue
						: getAtomValue(config, formDataInitData, processConfig, rowIndex)
				}
				prefix=""
				decimalSeparator="."
				displayType={processConfig.actiontype === "view" ? "text" : "input"}
				type="text"
				thousandSeparator={true}
				allowNegative={true}
				style={{ ...style }}
				className={overrideTailwindClasses(
					`rounded border-gray-400 focus:ring-0 focus:border-black text-center flex items-end  w-28  p-1 ${className}`,
				)}
				fixedDecimalScale={false}
				disabled={fieldDisableEnable(config, processExpression)}
			/>
		</div>
	);
};

export default Atom_range_slider_maxmin;
