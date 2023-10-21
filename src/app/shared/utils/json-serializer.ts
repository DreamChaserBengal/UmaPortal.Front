// JSONシリアライザ
import {
    JsonConvert,
    OperationMode,
    JsonConverter,
    JsonCustomConvert,
  } from 'json2typescript';
  
  /**
   * JSONシリアライザ
   */
  export class JsonSerializer {
    public static convert: JsonConvert;
  
    /**
     * instead of static constructor
     */
    static initiialize() {
      JsonSerializer.convert = new JsonConvert();
      JsonSerializer.convert.operationMode = OperationMode.ENABLE; // print some debug data
      // this.convert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
      // this.convert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null
    }
  }
  
  @JsonConverter
  export class BooleanConverter implements JsonCustomConvert<Boolean> {
    serialize(tf: Boolean): string {
      return tf ? '1' : '0';
    }
    deserialize(tf: string): Boolean {
      return tf === '1';
    }
  }
  
  // run constructor
  JsonSerializer.initiialize();