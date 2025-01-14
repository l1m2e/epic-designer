import { PageSchema } from "../../../types/epic-designer";

export interface DesignerProps {
  disabledZoom?: boolean;
  hiddenHeader?: boolean;
  lockDefaultSchemaEdit?: boolean;
  defaultSchema?: PageSchema;
}
