// Mapping between the survey and the underlying LimeSurvey survey
import * as mappingDefault from "./mapping-default";

import * as mappingIT from "./mapping-it";
import * as mappingCH from "./mapping-ch";
import * as mappingSI from "./mapping-si";
import * as mappingAT from "./mapping-at";
import * as mappingFR from "./mapping-fr";
import * as mappingDE from "./mapping-de";

export const mappings = new Map<String, Map<string, {
    gid: number,
    qid: number,
    answers?: {}
}>>();

mappings.set('default', mappingDefault.mapping);

mappings.set('at', mappingAT.mapping);
mappings.set('de', mappingDE.mapping);
mappings.set('fr', mappingFR.mapping);
mappings.set('it', mappingIT.mapping);
mappings.set('si', mappingSI.mapping);
mappings.set('ch', mappingCH.mapping);
