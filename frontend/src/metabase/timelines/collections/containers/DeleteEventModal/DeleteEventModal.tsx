import { connect } from "react-redux";
import { goBack, push } from "react-router-redux";
import _ from "underscore";
import * as Urls from "metabase/lib/urls";
import Timelines from "metabase/entities/timelines";
import TimelineEvents from "metabase/entities/timeline-events";
import { Timeline, TimelineEvent } from "metabase-types/api";
import { State } from "metabase-types/store";
import DeleteEventModal from "../../components/DeleteEventModal";
import { ModalProps } from "../../types";

const timelineProps = {
  id: (state: State, props: ModalProps) =>
    Urls.extractEntityId(props.params.timelineId),
  query: { include: "events" },
};

const timelineEventProps = {
  id: (state: State, props: ModalProps) =>
    Urls.extractEntityId(props.params.timelineEventId),
  entityAlias: "event",
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: async (event: TimelineEvent, timeline: Timeline) => {
    await dispatch(TimelineEvents.actions.delete(event));
    dispatch(push(Urls.timelineArchiveInCollection(timeline)));
  },
  onCancel: () => {
    dispatch(goBack());
  },
});

export default _.compose(
  Timelines.load(timelineProps),
  TimelineEvents.load(timelineEventProps),
  connect(null, mapDispatchToProps),
)(DeleteEventModal);
