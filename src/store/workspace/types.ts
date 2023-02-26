import { FetchState } from '../../helpers/fetch-state';
import { Workspace as BaseWorkspace } from '../../types/workspace';

export interface Workspace extends BaseWorkspace {}

export interface State {
  fetchState: FetchState;
  id: number;
  workspace: Workspace;
}
export interface UpDateWorkspace {
  workspaceId: number;
  name: string | never[];
  description: string;
  isFavorite: boolean;
}
