import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import RenderMolecule from "@molecule/RenderMolecule";
import moment from "moment";
import AtomFormItemWrapper from "@components/common/Atom/HookForm/AtomFormItemWrapper";
import { useHookForm } from "hooks/use-form";
import { replaceTemplate } from "@util/helper";
import WidgetWithId from "@middleware/components/WidgetStandart/WidgetWithId";

type PropsType = {
  formRef?: any;
};

const CozyCheckoutDeliveryTimeV2_1: FC<PropsType> = ({
  formRef: directFormRef,
}) => {
  const {
    config,
    readyDatasrc,
    defaultValue,
    dataMutate,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const formContext = useHookForm();
  const myFormName = widgetnemgooReady?.hookForm?.title || "cozyCheckout";
  const formRef = directFormRef || formContext.formList[myFormName];

  //fields
  const item = readyDatasrc[0] || {}; //user detail from ERP
  const myFields = widgetnemgooReady?.hookForm?.fields || [];
  const readyMyFields = replaceTemplate(myFields, item);

  return (
    <BlockDiv
      customClassName="bg-white p-4 mt-6 rounded-lg"
      divNumber="CozyCheckoutDeliveryTimeV2_1Outer"
    >
      <BlockDiv
        customClassName=""
        divNumber="CozyCheckoutDeliveryTimeV2_1Inner"
      >
        <BlockDiv
          customClassName="my-5 grid grid-cols-3 gap-x-5 items-end"
          divNumber="CozyCheckoutDeliveryTimeV2_1Body"
        >
          {readyMyFields.map((item: any, index: number) => {
            const ddd = item?.customProps?.defaultValue;

            let defaultValue = "";
            if (_.includes(ddd, "run:")) {
              const popo = ddd.split("run:").pop();
              defaultValue = new Function(popo)();
            }

            return (
              <AtomFormItemWrapper
                key={item?.id || index}
                showtype={item?.showtype}
                label={item?.label}
                validation={item?.validation}
                fieldName={item?.fieldName}
                customClassName={item?.customClassName || ""}
                customProps={{
                  ...item?.customProps,
                  defaultValue: defaultValue,
                }}
                register={formRef?.register}
                errors={formRef?.errors}
                control={formRef?.control}
              />
            );
          })}

          {/* ?????????? ???????????? */}
          {/* <AtomFormItemWrapper
            showtype="datepicker"
            label={{
              title: "??????????",
            }}
            fieldName="schedule.deliverydate"
            register={formRef?.register}
            errors={formRef?.errors}
            control={formRef?.control}
            customClassName="my-0"
          /> */}

          {/* <AtomFormItemWrapper
            showtype="checkbutton"
            fieldName="schedule.deliverydate"
            register={formRef?.register}
            errors={formRef?.errors}
            control={formRef?.control}
            customClassName="my-0"
            customProps={{
              defaultValue: moment().add(1, "days").format("YYYY-MM-DD"), //??????????????
              title: "??????????????",
              active: { className: "" },
              normal: { className: "" },
            }}
          /> */}

          {/* <AtomFormItemWrapper
            showtype="checkbutton"
            fieldName="schedule.deliverydate"
            register={formRef?.register}
            errors={formRef?.errors}
            control={formRef?.control}
            customClassName="my-0"
            customProps={{
              defaultValue: moment().add(2, "days").format("YYYY-MM-DD"), //????????????????
              title: "????????????????",
            }}
          /> */}
        </BlockDiv>

        <WidgetWithId widgetId="16530082200589" />

        {/* Covid-19 info */}
        <RenderAtom
          item={{
            value:
              "Covid 19-?? ???????????? ???????????????? ?????????????????????? ?????????????????? ?????????? ??????????, ?????????????????? ???? ?????? ?????????????? ?????????????? ?????????????? ?????????? ?????????????????? ???? ??????????????????.",
          }}
          defaultAtom="text"
          customClassName="block p-5 rounded-lg mt-5"
          customStyle={{
            background: "#FFE4BB70",
          }}
        />
        {/* ???????????????? ?????????????? */}
        <RenderMolecule
          moleculeConfig={{
            type: "MoleculeCheckbox",
            className: "mt-5",
            style: {},
          }}
          {...{
            item: [
              {
                title: "???????????????? ???????????????????? (30 ?????? - 2 ??????)",
              },
            ],
            divNamePrefix: "",
          }}
        />
      </BlockDiv>
    </BlockDiv>
  );
};

export default CozyCheckoutDeliveryTimeV2_1;
