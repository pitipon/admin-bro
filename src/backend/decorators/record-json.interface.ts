import ActionJSON from './action-json.interface'

type ErrorMessage = { message: string }

/**
 * JSON representation of an record
 */
export default interface RecordJSON {
  /**
   * all flatten params of given record
   */
  params: Record<string, any>;
  /**
   * If the record has properties which are references - here there will be populated records
   */
  populated: Record<string, RecordJSON>;
  /**
   * List of all validation errors
   */
  errors: Record<string, ErrorMessage>;
  /**
   * Uniq Id of a record. Not present if the record is new (in NewAction)
   */
  id: string;
  /**
   * Title of an record. Not present if the record is new (in NewAction)
   */
  title: string;
  /**
   * Actions which can be performed on this record.
   */
  recordActions: Array<ActionJSON>;
}

// TODO: describe flatten params
