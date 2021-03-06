import useSWR from "swr";
import _ from "lodash";
import { useSession } from "next-auth/react";
import { useCloud } from "hooks/use-cloud";
import { replaceTemplate, prepareC009GetProcessData } from "util/helper";

const useGetProcessC009 = (item: any, configName: string) => {
  const { data: session, status }: any = useSession();
  const cloudContext = useCloud();
  const metaName = cloudContext.metaConstant.ourMetaConstant.metaName;

  // let criteria = {
  //   filterStructureId: "1446625832826", //Тогтмол дугаар
  //   filterRecordId: item?.id, //item ID
  // };

  //2022.04.08 баасан гариг
  let criteria = replaceTemplate(
    {
      ...config[configName]?.processList?.parameters,
    },
    item
  );

  const processCode = config[configName]?.processList?.processCode;

  let {
    data,
    error,
    mutate: dvListMutate,
  } = useSWR(
    `/api/get-process?processcode=${processCode}&parameters=${JSON.stringify(
      criteria
    )}&metaName=${metaName}`
  );

  data = [data];
  data = prepareC009GetProcessData(processCode, data);

  return { dvList: data, dvListMutate };
};

export default useGetProcessC009;

/* ------------------------------------------------------ */
/*                         CONFIG                         */
/* ------------------------------------------------------ */

const config = {
  detailImages: {
    processList: {
      type: "getProcess",
      processCode: "clUtilEcmContentMapHdr_c009",
      parameters: {
        filterStructureId: "1446625832826", //Тогтмол дугаар
        filterRecordId: "{id}", //item ID
      },
    },
  },
  kpiInfo: {
    processList: {
      type: "getProcess",
      processCode: "czUtilDualItemDetailDv_c009",
      parameters: {
        filterTemplateId: "15",
        id: "1",
      },
    },
  },
  cozyCategory: {
    processList: {
      type: "getProcess",
      processCode: "czUtilGeneralCategoryParentList_c009",
      parameters: {
        filtercategoryid: "{filtercategoryid}",
      },
    },
  },
};
