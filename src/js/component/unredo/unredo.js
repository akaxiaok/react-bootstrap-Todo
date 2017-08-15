/**
 * Created by Kimi on 2017/4/19.
 */
import React from 'react'

const Unredo = (props) => {
  return (
    <div className="btn-group view-buttons" style={{ marginLeft: "10px" }} >
      <button className="btn btn-default" onClick={props.undo} disabled={!props.canUndo} >
        Undo
      </button >
      <button className="btn btn-default" onClick={props.redo} disabled={!props.canRedo} >
        Redo
      </button >
    </div >)
}
export default Unredo;
