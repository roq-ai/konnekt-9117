import { TicketInterface } from 'interfaces/ticket';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  seating_chart: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  ticket?: TicketInterface[];
  organization?: OrganizationInterface;
  _count?: {
    ticket?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  seating_chart?: string;
  organization_id?: string;
}
