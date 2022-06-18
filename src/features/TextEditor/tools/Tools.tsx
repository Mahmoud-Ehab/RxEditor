import Button from "../../../MiniComponents/Button";
import getStyle from "../style/ToolsStyle";
import { buttonsData } from "./ButtonsObject";

interface Props {
  btnWrapper: Function;
  onSave: Function;
  needSaving?: boolean;
}

const ButtonsContainer = (props: Props) => {
  const style = getStyle(props.needSaving);

  return (
    <div style={style.root}>
        {buttonsData.map((btn, i) => 
            <Button key={i}
            onClick={() => props.btnWrapper(btn.func)}
            mainStyle={style.btn} 
            hoverStyle={style.btnHover}>
                <btn.img size={25} color='#777' />
            </Button>
        )}

        <Button onClick={() => props.onSave()}
            mainStyle={style.saveBtn} 
            hoverStyle={{}}
            label="Save"
        />
    </div>
  );
}

export default ButtonsContainer;