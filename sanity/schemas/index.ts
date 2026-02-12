/**
 * Sanity schema index — exports all document types
 * Models defined in arch.md §3
 */
import pillar from "./pillar";
import program from "./program";
import post from "./post";
import event from "./event";
import impactMetric from "./impactMetric";
import story from "./story";

export const schemaTypes = [pillar, program, post, event, impactMetric, story];
