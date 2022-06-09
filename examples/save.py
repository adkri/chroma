import pprint
import chroma
from chroma import data_manager

# chroma = data_manager.ChromaDataManager()

def getAttributes(obj):
    from pprint import pprint
    from inspect import getmembers
    from types import FunctionType
    
    def attributes(obj):
        disallowed_names = {
          name for name, value in getmembers(type(obj)) 
            if isinstance(value, FunctionType)}
        return {
          name for name in dir(obj) 
            if name[0] != '_' and name not in disallowed_names and hasattr(obj, name)}
    pprint(attributes(obj))

getAttributes(data_manager)