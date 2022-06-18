import DatalistInterface from "../Interfaces/DatalistInterface";
import Selections from "../Interfaces/SelectionsInterface";
import Section from "../Interfaces/SectionInterface";

class Sections extends DatalistInterface<Section> {
  getList() {
    return super.getList() as Array<Section>;
  }

  add(selections: Selections) {
    // Ensure that: there's a headline been selected 
    // to add the section in.
    if (selections.headlines < 0) return; 

    let newId = 0;
    this.getList().forEach(
      (section) => newId += section.id
    );
    newId += 1;

    const newSection: Section = {
      id: newId,
      label: "New Section",
      content: [],
      headlineId: selections.headlines,
    };

    const newSectionsList = this.getList().map((section) => ({...section}));
    newSectionsList.push(newSection);
    this.setList(newSectionsList);

    this.dispatchUpdate();
  };

  filter(selections: Selections) {
    return this.getList().filter(
      (section) => section.headlineId === selections.headlines
    );
  }
}

export default Sections;