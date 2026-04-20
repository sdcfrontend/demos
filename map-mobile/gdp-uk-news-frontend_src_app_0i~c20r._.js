(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/graphql.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ __turbopack_context__.s([
    "ConstituencyStatus",
    ()=>ConstituencyStatus,
    "CouncilProportion",
    ()=>CouncilProportion,
    "CouncilType",
    ()=>CouncilType,
    "ElectionStatus",
    ()=>ElectionStatus,
    "ElectionType",
    ()=>ElectionType,
    "GainHoldStatus",
    ()=>GainHoldStatus,
    "GetElectionDataDocument",
    ()=>GetElectionDataDocument,
    "GetElectionDataForExitPollDocument",
    ()=>GetElectionDataForExitPollDocument,
    "GetLandingPageDataDocument",
    ()=>GetLandingPageDataDocument,
    "GetTopUpVotingAreaDataDocument",
    ()=>GetTopUpVotingAreaDataDocument,
    "GetVotingAreaDataDocument",
    ()=>GetVotingAreaDataDocument,
    "GetWardDataDocument",
    ()=>GetWardDataDocument,
    "LocalCouncilElectionFragmentFragmentDoc",
    ()=>LocalCouncilElectionFragmentFragmentDoc,
    "LocalCouncilVotingAreaFragmentFragmentDoc",
    ()=>LocalCouncilVotingAreaFragmentFragmentDoc,
    "NorthernIrelandElectionFragmentFragmentDoc",
    ()=>NorthernIrelandElectionFragmentFragmentDoc,
    "NorthernIrelandVotingAreaFragmentFragmentDoc",
    ()=>NorthernIrelandVotingAreaFragmentFragmentDoc,
    "PartyFragmentFragmentDoc",
    ()=>PartyFragmentFragmentDoc,
    "ResultStatus",
    ()=>ResultStatus,
    "ResultType",
    ()=>ResultType,
    "ScottishParliamentElectionFragmentFragmentDoc",
    ()=>ScottishParliamentElectionFragmentFragmentDoc,
    "ScottishParliamentVotingAreaFragmentFragmentDoc",
    ()=>ScottishParliamentVotingAreaFragmentFragmentDoc,
    "Source",
    ()=>Source,
    "StringerStatus",
    ()=>StringerStatus,
    "StringerVerificationStatus",
    ()=>StringerVerificationStatus,
    "UkGeneralElectionFragmentFragmentDoc",
    ()=>UkGeneralElectionFragmentFragmentDoc,
    "UkGeneralVotingAreaFragmentFragmentDoc",
    ()=>UkGeneralVotingAreaFragmentFragmentDoc,
    "UsPresidentialElectionFragmentFragmentDoc",
    ()=>UsPresidentialElectionFragmentFragmentDoc,
    "UsPresidentialVotingAreaElectionFragmentFragmentDoc",
    ()=>UsPresidentialVotingAreaElectionFragmentFragmentDoc,
    "UsPresidentialVotingAreaFragmentFragmentDoc",
    ()=>UsPresidentialVotingAreaFragmentFragmentDoc,
    "VotingStatus",
    ()=>VotingStatus,
    "WelshAssemblyElectionFragmentFragmentDoc",
    ()=>WelshAssemblyElectionFragmentFragmentDoc,
    "WelshAssemblyVotingAreaFragmentFragmentDoc",
    ()=>WelshAssemblyVotingAreaFragmentFragmentDoc
]);
var ConstituencyStatus = /*#__PURE__*/ function(ConstituencyStatus) {
    /** The constituency has assigned stringers who have completed sign-up */ ConstituencyStatus["AssigneesVerified"] = "ASSIGNEES_VERIFIED";
    /** The constituency has assigned stringers who have not yet completed sign-up */ ConstituencyStatus["InProgress"] = "IN_PROGRESS";
    /** The constituency has no assigned stringers */ ConstituencyStatus["NoAssignees"] = "NO_ASSIGNEES";
    return ConstituencyStatus;
}({});
var CouncilProportion = /*#__PURE__*/ function(CouncilProportion) {
    CouncilProportion["All"] = "ALL";
    CouncilProportion["Half"] = "HALF";
    CouncilProportion["Thirds"] = "THIRDS";
    return CouncilProportion;
}({});
var CouncilType = /*#__PURE__*/ function(CouncilType) {
    /** English County Council */ CouncilType["County"] = "COUNTY";
    /** London */ CouncilType["London"] = "LONDON";
    /** Metropolitan Council */ CouncilType["Metro"] = "METRO";
    /** Non-Metropolitan Council */ CouncilType["NonMet"] = "NON_MET";
    /** Scottish Council */ CouncilType["Scottish"] = "SCOTTISH";
    /** Unitary */ CouncilType["Unitary"] = "UNITARY";
    /** Welsh Council */ CouncilType["Welsh"] = "WELSH";
    return CouncilType;
}({});
var ElectionStatus = /*#__PURE__*/ function(ElectionStatus) {
    /** Results have been called for the election */ ElectionStatus["Called"] = "CALLED";
    /** Results are currently being counted for the election */ ElectionStatus["Counting"] = "COUNTING";
    /** Election has been created */ ElectionStatus["New"] = "NEW";
    /** Voting is currently underway for the election */ ElectionStatus["Polling"] = "POLLING";
    /** Election is currently being rehearsed internally */ ElectionStatus["Rehearsal"] = "REHEARSAL";
    return ElectionStatus;
}({});
var ElectionType = /*#__PURE__*/ function(ElectionType) {
    /** UK By Election */ ElectionType["ByElection"] = "BY_ELECTION";
    /** English Council Local Election */ ElectionType["EnglishCouncil"] = "ENGLISH_COUNCIL";
    /** London Assembly Election */ ElectionType["LondonAssembly"] = "LONDON_ASSEMBLY";
    /** Northern Ireland Election */ ElectionType["NorthernIreland"] = "NORTHERN_IRELAND";
    /** Scottish Council Local Election */ ElectionType["ScottishCouncil"] = "SCOTTISH_COUNCIL";
    /** Scottish Parliament Election */ ElectionType["ScottishParliament"] = "SCOTTISH_PARLIAMENT";
    /** UK General Election */ ElectionType["UkGeneral"] = "UK_GENERAL";
    /** US Presidential Election */ ElectionType["UsPresidential"] = "US_PRESIDENTIAL";
    /** Welsh Assembly Election */ ElectionType["WelshAssembly"] = "WELSH_ASSEMBLY";
    /** Welsh Council Local Election */ ElectionType["WelshCouncil"] = "WELSH_COUNCIL";
    return ElectionType;
}({});
var GainHoldStatus = /*#__PURE__*/ function(GainHoldStatus) {
    /** The winning party has gained the voting area */ GainHoldStatus["Gain"] = "GAIN";
    /** The winning party has held the voting area */ GainHoldStatus["Hold"] = "HOLD";
    return GainHoldStatus;
}({});
var ResultStatus = /*#__PURE__*/ function(ResultStatus) {
    /** The nominee has been elected as a sitting member */ ResultStatus["Elected"] = "ELECTED";
    /** The candidate has not received enough votes and has been excluded from future stages */ ResultStatus["Excluded"] = "EXCLUDED";
    /** The nominee has not been elected */ ResultStatus["NotElected"] = "NOT_ELECTED";
    /** The nominee has been elected in the current stage, and their surplus votes above the quota are distributed */ ResultStatus["SurplusDistributed"] = "SURPLUS_DISTRIBUTED";
    /** The candidate's status is yet to be determined */ ResultStatus["Unknown"] = "UNKNOWN";
    /** The nominee has been excluded, and their votes distributed among the other candidates */ ResultStatus["VotesDistributed"] = "VOTES_DISTRIBUTED";
    return ResultStatus;
}({});
var ResultType = /*#__PURE__*/ function(ResultType) {
    /** A rushed input which omits data concerning vote counts, specifying only elected candidates */ ResultType["Rush"] = "RUSH";
    /** The default election input, which contains all relevant stage data */ ResultType["Standard"] = "STANDARD";
    return ResultType;
}({});
var Source = /*#__PURE__*/ function(Source) {
    Source["Nbcu"] = "NBCU";
    /** The Press Association */ Source["Pa"] = "PA";
    /** Sky */ Source["Sky"] = "SKY";
    /** Sky Stringer */ Source["Stringer"] = "STRINGER";
    return Source;
}({});
var StringerStatus = /*#__PURE__*/ function(StringerStatus) {
    /** The stringer has been assigned to a constituency */ StringerStatus["Assigned"] = "ASSIGNED";
    /** The stringer has been assigned to a constituency but has not yet completed sign-up process */ StringerStatus["InProgress"] = "IN_PROGRESS";
    /** The stringer has not been assigned to a constituency */ StringerStatus["NotAssigned"] = "NOT_ASSIGNED";
    return StringerStatus;
}({});
var StringerVerificationStatus = /*#__PURE__*/ function(StringerVerificationStatus) {
    /** The stringer has not yet been verified */ StringerVerificationStatus["NotVerified"] = "NOT_VERIFIED";
    /** The stringer has been verified by logging into the system */ StringerVerificationStatus["Verified"] = "VERIFIED";
    return StringerVerificationStatus;
}({});
var VotingStatus = /*#__PURE__*/ function(VotingStatus) {
    VotingStatus["Baseline"] = "BASELINE";
    VotingStatus["Declared"] = "DECLARED";
    VotingStatus["InProgress"] = "IN_PROGRESS";
    VotingStatus["Rush"] = "RUSH";
    return VotingStatus;
}({});
const PartyFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const LocalCouncilElectionFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "LocalCouncilElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "LocalCouncilElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasDeclared"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasCount"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "councils"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "councilType"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "alias": {
                                        "kind": "Name",
                                        "value": "gainOrHold"
                                    },
                                    "name": {
                                        "kind": "Name",
                                        "value": "gainHold"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "previouslyControllingParty"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "controllingParty"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "parties"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "FragmentSpread",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "PartyFragment"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seatCount"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const LocalCouncilVotingAreaFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "LocalCouncilVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "LocalCouncilVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "id"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majorityThreshold"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "councilType"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "boundaryChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "total"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "controllingParty"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "PartyFragment"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "councilType"
                        }
                    },
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "gainOrHold"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "gainHold"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "previouslyControllingParty"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "PartyFragment"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "parties"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatsChange"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "majority"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "wards"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "status"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatsUp"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "gainHoldBySeats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "gainHoldStatus"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "partyAbbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "partyDisplayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "previousPartyAbbreviation"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "FragmentSpread",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "PartyFragment"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seatsWon"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seatsDefending"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seatsChange"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "voteCount"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const NorthernIrelandElectionFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "NorthernIrelandElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "NorthernIrelandElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "NorthernIrelandElectionPartyResult"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstPreferenceVotes"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "count"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "change"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "percentage"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "percentageChange"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const NorthernIrelandVotingAreaFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "NorthernIrelandVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "NorthernIrelandVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "available"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "declared"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "quota"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "firstPreferenceVotes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "nominations"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "firstPreferenceVoteCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "firstPreferenceVotePercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "resultStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seat"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electedCandidates"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const ScottishParliamentElectionFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "ScottishParliamentElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "AMSElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "announcement"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "message"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "subject"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnout"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentageChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "available"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "declared"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasCount"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasDeclared"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electedCandidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "gainHold"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "previouslyElectedCandidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpVotingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "candidateNominations"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "candidate"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "firstName"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "surname"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "resultStatus"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "electedOrder"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seats"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "count"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "change"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electedCandidates"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "candidate"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "firstName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "surname"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electedOrder"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "available"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "declared"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasSummary"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "available"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "declared"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "total"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpVotingAreasSummary"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "available"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "declared"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "total"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "name"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpPartyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "name"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
const ScottishParliamentVotingAreaFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "ScottishParliamentVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "AMSVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentageChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "nominations"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "voteCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentageChange"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "resultStatus"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "gainHold"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majority"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majorityShare"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electedCandidate"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "previouslyElectedCandidate"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const UkGeneralElectionFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "UkGeneralElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "UkGeneralElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnout"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentageChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "announcement"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "message"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "subject"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "UkGeneralElectionPartyResult"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votes"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "count"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "change"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "percentage"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "percentageChange"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "number"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "UkGeneralVotingArea"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electedCandidate"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "FragmentSpread",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "PartyFragment"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "previouslyElectedCandidate"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "FragmentSpread",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "PartyFragment"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "alias": {
                                                    "kind": "Name",
                                                    "value": "gainOrHold"
                                                },
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "gainHold"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const UkGeneralVotingAreaFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "UkGeneralVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "UkGeneralVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "nominations"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "voteCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentageChange"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "gainOrHold"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "gainHold"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majority"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majorityShare"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electedCandidate"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "previouslyElectedCandidate"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const UsPresidentialElectionFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "USPresidentialElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "USPresidentialElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "announcement"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "message"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "subject"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votePercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electoralVotes"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "senateResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "houseResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortestName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electoralVotes"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "turnout"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "FragmentSpread",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "PartyFragment"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electoralVotes"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "voteCount"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votePercentage"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const UsPresidentialVotingAreaElectionFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "USPresidentialVotingAreaElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "USPresidentialElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "__typename"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortestName"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const UsPresidentialVotingAreaFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "USPresidentialVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "USPresidentialVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electoralVotes"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "shortestName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnout"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votePercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "districtResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "source"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "sourceId"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "color"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "primaryColor"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "secondaryColor"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "textColor"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "voteCount"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votePercentage"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electoralVotes"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "voteCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "senateResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "houseResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "previousPresidentialResult"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "name"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electoralVotes"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "voteCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "senateSeatsContested"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "houseSeatsContested"
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const WelshAssemblyElectionFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "WelshAssemblyElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "AMSElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "available"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "declared"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "announcement"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "message"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "subject"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpVotingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "candidateNominations"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "resultStatus"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "name"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "abbreviation"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "electedOrder"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpPartyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "name"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpVotingAreasSummary"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "turnoutPercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "turnoutPercentageChange"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "turnout"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
const WelshAssemblyVotingAreaFragmentFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "WelshAssemblyVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "AMSTopUpVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "id"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "shortName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentageChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingStatus"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "lastUpdated"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "gainHold"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electedCandidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "previouslyElectedCandidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidateNominations"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "candidate"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "firstName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "surname"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "resultStatus"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electedOrder"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electedCandidates"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electedOrder"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "available"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "declared"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
const GetElectionDataDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "GetElectionData"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "electionId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "election"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electionId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "__typename"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electionType"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "available"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "declared"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingAreasCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingAreasDeclared"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "LocalCouncilElectionFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "UkGeneralElectionFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "NorthernIrelandElectionFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "USPresidentialElectionFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ScottishParliamentElectionFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "WelshAssemblyElectionFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ScottishParliamentElectionFragment"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "LocalCouncilElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "LocalCouncilElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasDeclared"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasCount"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "councils"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "councilType"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "alias": {
                                        "kind": "Name",
                                        "value": "gainOrHold"
                                    },
                                    "name": {
                                        "kind": "Name",
                                        "value": "gainHold"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "previouslyControllingParty"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "controllingParty"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "parties"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "FragmentSpread",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "PartyFragment"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seatCount"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "UkGeneralElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "UkGeneralElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnout"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentageChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "announcement"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "message"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "subject"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "UkGeneralElectionPartyResult"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votes"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "count"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "change"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "percentage"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "percentageChange"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "number"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "UkGeneralVotingArea"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electedCandidate"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "FragmentSpread",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "PartyFragment"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "previouslyElectedCandidate"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "FragmentSpread",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "PartyFragment"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "alias": {
                                                    "kind": "Name",
                                                    "value": "gainOrHold"
                                                },
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "gainHold"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "NorthernIrelandElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "NorthernIrelandElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "NorthernIrelandElectionPartyResult"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstPreferenceVotes"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "count"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "change"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "percentage"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "percentageChange"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "USPresidentialElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "USPresidentialElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "announcement"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "message"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "subject"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votePercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electoralVotes"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "senateResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "houseResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortestName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electoralVotes"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "turnout"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "FragmentSpread",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "PartyFragment"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electoralVotes"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "voteCount"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votePercentage"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "ScottishParliamentElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "AMSElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "announcement"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "message"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "subject"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnout"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentageChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "available"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "declared"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasCount"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasDeclared"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electedCandidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "gainHold"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "previouslyElectedCandidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpVotingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "candidateNominations"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "candidate"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "firstName"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "surname"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "resultStatus"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "electedOrder"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seats"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "count"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "change"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electedCandidates"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "candidate"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "firstName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "surname"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electedOrder"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "available"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "declared"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreasSummary"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "available"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "declared"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "total"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpVotingAreasSummary"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "available"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "declared"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "total"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "name"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpPartyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "name"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "WelshAssemblyElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "AMSElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "available"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "declared"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "announcement"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "message"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "subject"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpVotingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "candidateNominations"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "resultStatus"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "name"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "abbreviation"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "electedOrder"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpPartyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "name"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "topUpVotingAreasSummary"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "turnoutPercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "turnoutPercentageChange"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "turnout"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
const GetLandingPageDataDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "GetLandingPageData"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "englishCouncilElectionId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "scottishParliamentElectionId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "welshAssemblyElectionId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "englishCouncilElection"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "election"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "englishCouncilElectionId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "LocalCouncilElection"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "partyResults"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "abbreviation"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "displayName"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "name"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "seats"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "change"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "count"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seats"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "available"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "declared"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electionType"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votingAreasCount"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votingAreasDeclared"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "scottishParliamentElection"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "election"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "scottishParliamentElectionId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "AMSElection"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "partyResults"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "abbreviation"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "displayName"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "name"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "seats"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "change"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "count"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "topUpPartyResults"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "abbreviation"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "displayName"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "name"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "seats"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "change"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "count"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seats"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "available"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "declared"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electionType"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votingAreasCount"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votingAreasDeclared"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "welshAssemblyElection"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "election"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "welshAssemblyElectionId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "AMSElection"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "topUpPartyResults"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "party"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "abbreviation"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "displayName"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "name"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "seats"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "change"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "count"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seats"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "available"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "declared"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electionType"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votingAreasCount"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votingAreasDeclared"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
const GetElectionDataForExitPollDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "GetElectionDataForExitPoll"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "electionId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "election"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electionId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "UkGeneralElection"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votingAreas"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "sourceId"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "shortName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "nominations"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "party"
                                                                        },
                                                                        "selectionSet": {
                                                                            "kind": "SelectionSet",
                                                                            "selections": [
                                                                                {
                                                                                    "kind": "Field",
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "abbreviation"
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "kind": "Field",
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "name"
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "kind": "Field",
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "displayName"
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "previouslyElectedCandidate"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "party"
                                                                        },
                                                                        "selectionSet": {
                                                                            "kind": "SelectionSet",
                                                                            "selections": [
                                                                                {
                                                                                    "kind": "Field",
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "abbreviation"
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "kind": "Field",
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "name"
                                                                                    }
                                                                                },
                                                                                {
                                                                                    "kind": "Field",
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "displayName"
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
const GetTopUpVotingAreaDataDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "GetTopUpVotingAreaData"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "electionId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreaId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "election"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electionId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "__typename"
                                    }
                                },
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "AMSElection"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votingAreasCount"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votingAreasDeclared"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "votingArea"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "topUpVotingArea"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "electionId"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electionId"
                                    }
                                }
                            },
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingAreaId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "__typename"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "WelshAssemblyVotingAreaFragment"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "WelshAssemblyVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "AMSTopUpVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "id"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "shortName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentageChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingStatus"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "lastUpdated"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "gainHold"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electedCandidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "previouslyElectedCandidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidateNominations"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "candidate"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "firstName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "surname"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "resultStatus"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "electedOrder"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "change"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electedCandidates"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electedOrder"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "available"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "declared"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
const GetVotingAreaDataDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "GetVotingAreaData"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "electionId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreaId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "election"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electionId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "__typename"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "USPresidentialVotingAreaElectionFragment"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingArea"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "electionId"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electionId"
                                    }
                                }
                            },
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingAreaId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "__typename"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "LocalCouncilVotingAreaFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "UkGeneralVotingAreaFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "NorthernIrelandVotingAreaFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "USPresidentialVotingAreaFragment"
                                    }
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ScottishParliamentVotingAreaFragment"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "USPresidentialVotingAreaElectionFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "USPresidentialElection"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreas"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "__typename"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortestName"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "LocalCouncilVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "LocalCouncilVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "id"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majorityThreshold"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "councilType"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "boundaryChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "total"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "controllingParty"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "PartyFragment"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "councilType"
                        }
                    },
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "gainOrHold"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "gainHold"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "previouslyControllingParty"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": {
                                        "kind": "Name",
                                        "value": "PartyFragment"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "parties"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatsChange"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "majority"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "wards"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "displayName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "status"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatsUp"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "lastUpdated"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "gainHoldBySeats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "gainHoldStatus"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "partyAbbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "partyDisplayName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "previousPartyAbbreviation"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "FragmentSpread",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "PartyFragment"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seatsWon"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seatsDefending"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "seatsChange"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "voteCount"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "UkGeneralVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "UkGeneralVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "nominations"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "voteCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentageChange"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "gainOrHold"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "gainHold"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majority"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majorityShare"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electedCandidate"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "previouslyElectedCandidate"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "NorthernIrelandVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "NorthernIrelandVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "seats"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "available"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "declared"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "quota"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "firstPreferenceVotes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentage"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "percentageChange"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "nominations"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "firstPreferenceVoteCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "firstPreferenceVotePercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "resultStatus"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seat"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electedCandidates"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "USPresidentialVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "USPresidentialVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electoralVotes"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "shortestName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnout"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votePercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "districtResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "partyResults"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "party"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "abbreviation"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "source"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "sourceId"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "color"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "primaryColor"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "secondaryColor"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "textColor"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "voteCount"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "votePercentage"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "partyResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electoralVotes"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "voteCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "senateResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "houseResults"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "seatCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "previousPresidentialResult"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "abbreviation"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "name"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "displayName"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electoralVotes"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "voteCount"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "senateSeatsContested"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "houseSeatsContested"
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "ScottishParliamentVotingAreaFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "AMSVotingArea"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electorate"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentage"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "turnoutPercentageChange"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "nominations"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "voteCount"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentage"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votePercentageChange"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "resultStatus"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "gainHold"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majority"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "majorityShare"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "electedCandidate"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "previouslyElectedCandidate"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "candidate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "firstName"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "surname"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "party"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "FragmentSpread",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "PartyFragment"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
const GetWardDataDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "GetWardData"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "electionId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "votingAreaId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "wardId"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "votingArea"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "electionId"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "electionId"
                                    }
                                }
                            },
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingAreaId"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "__typename"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "shortName"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "votingStatus"
                                    }
                                },
                                {
                                    "kind": "InlineFragment",
                                    "typeCondition": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "LocalCouncilVotingArea"
                                        }
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "wards"
                                                },
                                                "arguments": [
                                                    {
                                                        "kind": "Argument",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "wardId"
                                                        },
                                                        "value": {
                                                            "kind": "Variable",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "wardId"
                                                            }
                                                        }
                                                    }
                                                ],
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "id"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "displayName"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "gainHold"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "lastUpdated"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "status"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "seatsUp"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "seatOrder"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "partyResults"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "party"
                                                                        },
                                                                        "selectionSet": {
                                                                            "kind": "SelectionSet",
                                                                            "selections": [
                                                                                {
                                                                                    "kind": "FragmentSpread",
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "PartyFragment"
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "seatsWon"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "seatsDefending"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "seatsChange"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "voteCount"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "gainHoldBySeats"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "gainHoldStatus"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "partyAbbreviation"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "partyDisplayName"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "previousPartyAbbreviation"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "incumbentParties"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "PartyFragment"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Party"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "abbreviation"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "displayName"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    }
                ]
            }
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/gql.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gql",
    ()=>gql
]);
/* eslint-disable */ var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/graphql.ts [client] (ecmascript)");
;
/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */ const documents = {
    "\nquery GetElectionData($electionId: String!) {\n  election(id: $electionId) {\n    __typename\n    electionType\n    displayName\n    seats {\n      available\n      declared\n    }\n    votingAreasCount\n    votingAreasDeclared\n    ...LocalCouncilElectionFragment\n    ...UkGeneralElectionFragment\n    ...NorthernIrelandElectionFragment\n    ...USPresidentialElectionFragment\n    ...ScottishParliamentElectionFragment\n    ...WelshAssemblyElectionFragment\n    ...ScottishParliamentElectionFragment\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["GetElectionDataDocument"],
    "\nquery GetLandingPageData($englishCouncilElectionId: String!, $scottishParliamentElectionId: String!, $welshAssemblyElectionId: String!) {\n  englishCouncilElection: election(id: $englishCouncilElectionId) {\n    ... on LocalCouncilElection {\n      partyResults {\n        party {\n          abbreviation\n          displayName\n          name\n        }\n        seats {\n          change\n          count\n        }\n      }\n      seats {\n        available\n        declared\n      }\n      electionType\n      displayName\n      votingAreasCount\n      votingAreasDeclared\n    }\n  }\n  scottishParliamentElection: election(id: $scottishParliamentElectionId) {\n    ... on AMSElection {\n      partyResults {\n        party {\n          abbreviation\n          displayName\n          name\n        }\n        seats {\n          change\n          count\n        }\n      }\n      topUpPartyResults {\n        party {\n          abbreviation\n          displayName\n          name\n        }\n        seats {\n          change\n          count\n        }\n      }\n      seats {\n        available\n        declared\n      }\n      electionType\n      displayName\n      votingAreasCount\n      votingAreasDeclared\n    }\n  }\n  welshAssemblyElection: election(id: $welshAssemblyElectionId) {\n    ... on AMSElection {\n      topUpPartyResults {\n        party {\n          abbreviation\n          displayName\n          name\n        }\n        seats {\n          change\n          count\n        }\n      }\n      seats {\n        available\n        declared\n      }\n      electionType\n      displayName\n      votingAreasCount\n      votingAreasDeclared\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["GetLandingPageDataDocument"],
    "\nquery GetElectionDataForExitPoll($electionId: String!) {\n  election(id: $electionId) {\n    ... on UkGeneralElection {\n      votingAreas {\n        sourceId\n        shortName\n        name\n        nominations {\n          party {\n            abbreviation\n            name\n            displayName\n          }\n        }\n        previouslyElectedCandidate {\n          party {\n            abbreviation\n            name\n            displayName\n          }\n        }\n      }\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["GetElectionDataForExitPollDocument"],
    "\nfragment LocalCouncilElectionFragment on LocalCouncilElection {\n  votingAreasDeclared\n  votingAreasCount\n  partyResults {\n    party {\n      ...PartyFragment\n    }\n    seats {\n      count\n      change\n    }\n    councils {\n      count\n      change\n    }\n  }\n  votingAreas {\n    shortName\n    name\n    displayName\n    id\n    lastUpdated\n    votingStatus\n    councilType\n    gainOrHold: gainHold\n    previouslyControllingParty {\n      ...PartyFragment\n    }\n    controllingParty {\n      ...PartyFragment\n    }\n    parties {\n      party {\n        ...PartyFragment\n      }\n      seatCount\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LocalCouncilElectionFragmentFragmentDoc"],
    "\nfragment LocalCouncilVotingAreaFragment on LocalCouncilVotingArea {\n  id\n  displayName\n  majorityThreshold\n  councilType\n  boundaryChange\n  seats {\n    total\n  }\n  controllingParty {\n    ...PartyFragment\n  }\n  councilType\n  gainOrHold: gainHold\n  previouslyControllingParty {\n    ...PartyFragment\n  }\n  parties {\n    party {\n      ...PartyFragment\n    }\n    seatCount\n    seatsChange\n    majority\n  }\n  wards {\n    id\n    displayName\n    status\n    seatsUp\n    lastUpdated\n    gainHoldBySeats {\n      gainHoldStatus\n      partyAbbreviation\n      partyDisplayName\n      previousPartyAbbreviation\n    }\n    partyResults {\n      party {\n        ...PartyFragment\n      }\n      seatsWon\n      seatsDefending\n      seatsChange\n      voteCount\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LocalCouncilVotingAreaFragmentFragmentDoc"],
    "\nfragment NorthernIrelandElectionFragment on NorthernIrelandElection {\n  partyResults {\n    seats {\n      count\n      change\n    }\n    party {\n      ...PartyFragment\n    }\n    ... on NorthernIrelandElectionPartyResult {\n      firstPreferenceVotes {\n        count\n        change\n        percentage\n        percentageChange\n      }\n    }\n  }\n  votingAreas {\n    shortName\n    name\n    id\n    votingStatus\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["NorthernIrelandElectionFragmentFragmentDoc"],
    "\nfragment NorthernIrelandVotingAreaFragment on NorthernIrelandVotingArea {\n  electorate\n  turnoutPercentage\n  seats {\n    available\n    declared\n  }\n  quota\n  partyResults {\n    party {\n      ...PartyFragment\n    }\n    firstPreferenceVotes {\n      percentage\n      percentageChange\n    }\n  }\n  nominations {\n    candidate {\n      firstName\n      surname\n    }\n    party {\n      ...PartyFragment\n    }\n    firstPreferenceVoteCount\n    firstPreferenceVotePercentage\n    resultStatus\n    seat\n  }\n  electedCandidates {\n    candidate {\n      firstName\n      surname\n    }\n    party {\n      ...PartyFragment\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["NorthernIrelandVotingAreaFragmentFragmentDoc"],
    "\n  fragment PartyFragment on Party {\n    abbreviation\n    displayName\n    name\n  }\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["PartyFragmentFragmentDoc"],
    "\nfragment ScottishParliamentElectionFragment on AMSElection {\n    displayName\n    announcement {\n        message\n        subject\n    }\n    turnout\n    turnoutPercentage\n    turnoutPercentageChange\n    seats {\n        available\n        declared\n    }\n    votingAreasCount\n    votingAreasDeclared\n    votingAreas {\n        id\n        displayName\n        name\n        shortName\n        lastUpdated\n        votingStatus\n        electedCandidate {\n            party {\n                abbreviation\n                displayName\n                name\n            }\n        }\n        gainHold\n        previouslyElectedCandidate {\n            party {\n                abbreviation\n                displayName\n                name\n            }\n        }\n    }\n    topUpVotingAreas {\n        id\n        displayName\n        name\n        shortName\n        lastUpdated\n        votingStatus\n        partyResults {\n            party {\n                abbreviation\n                displayName\n                name\n            }\n            candidateNominations {\n                candidate {\n                    firstName\n                    surname\n                }\n                resultStatus\n                electedOrder\n            }\n            seats {\n                count\n                change\n            }\n        }\n        electedCandidates {\n            candidate {\n                firstName\n                surname\n            }\n            party {\n                abbreviation\n                displayName\n                name\n            }\n            electedOrder\n        }\n        seats {\n            available\n            declared\n        }\n    }\n    votingAreasSummary {\n        seats {\n            available\n            declared\n            total\n        }\n    }\n    topUpVotingAreasSummary {\n        seats {\n            available\n            declared\n            total\n        }\n    }\n    partyResults {\n        party {\n            abbreviation\n            displayName\n            name\n        }\n        seats {\n            change\n            count\n        }\n        votes {\n            count\n            change\n            percentage\n            percentageChange\n        }\n    }\n    topUpPartyResults {\n        party {\n            abbreviation\n            displayName\n            name\n        }\n        seats {\n            change\n            count\n        }\n        votes {\n            count\n            change\n            percentage\n            percentageChange\n        }\n    }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ScottishParliamentElectionFragmentFragmentDoc"],
    "\nfragment ScottishParliamentVotingAreaFragment on AMSVotingArea {\n  electorate\n  turnoutPercentage\n  turnoutPercentageChange\n  nominations {\n    candidate {\n      firstName\n      surname\n    }\n    party {\n      ...PartyFragment\n    }\n    voteCount\n    votePercentage\n    votePercentageChange\n    resultStatus\n  }\n  gainHold\n  majority\n  majorityShare\n  electedCandidate {\n    candidate {\n      firstName\n      surname\n    }\n    party {\n      ...PartyFragment\n    }\n  }\n  previouslyElectedCandidate {\n    candidate {\n      firstName\n      surname\n    }\n    party {\n      ...PartyFragment\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ScottishParliamentVotingAreaFragmentFragmentDoc"],
    "\nfragment UkGeneralElectionFragment on UkGeneralElection {\n  electorate\n  turnout\n  turnoutPercentage\n  turnoutPercentageChange\n  announcement {\n    message\n    subject\n  }\n  partyResults {\n    seats {\n      count\n      change\n    }\n    party {\n      ...PartyFragment\n    }\n    ... on UkGeneralElectionPartyResult {\n      votes {\n        count\n        change\n        percentage\n        percentageChange\n      }\n    }\n  }\n  votingAreas {\n    shortName\n    name\n    displayName\n    id\n    number\n    votingStatus\n    lastUpdated\n    ... on UkGeneralVotingArea {\n      electedCandidate {\n        party {\n          ...PartyFragment\n        }\n      }\n      previouslyElectedCandidate {\n        party {\n          ...PartyFragment\n        }\n      }\n      gainOrHold: gainHold\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["UkGeneralElectionFragmentFragmentDoc"],
    "\nfragment UkGeneralVotingAreaFragment on UkGeneralVotingArea {\n  electorate\n  turnoutPercentage\n  nominations {\n    candidate {\n      firstName\n      surname\n    }\n    party {\n      ...PartyFragment\n    }\n    voteCount\n    votePercentage\n    votePercentageChange\n  }\n  gainOrHold: gainHold\n  majority\n  majorityShare\n  electedCandidate {\n    party {\n      ...PartyFragment\n    }\n  }\n  previouslyElectedCandidate {\n    party {\n      ...PartyFragment\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["UkGeneralVotingAreaFragmentFragmentDoc"],
    "\nfragment USPresidentialElectionFragment on USPresidentialElection {\n  announcement {\n    message\n    subject\n  }\n  votePercentage\n  partyResults {\n    party {\n      ...PartyFragment\n    }\n    electoralVotes\n    votePercentage\n  }\n  senateResults {\n    party {\n      ...PartyFragment\n    }\n    seatCount\n  }\n  houseResults {\n    party {\n      ...PartyFragment\n    }\n    seatCount\n  }\n  votingAreas {\n    id\n    name\n    displayName\n    shortName\n    shortestName\n    electoralVotes\n    turnout\n    votePercentage\n    votingStatus\n    partyResults {\n      party {\n        ...PartyFragment\n      }\n      electoralVotes\n      voteCount\n      votePercentage\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["UsPresidentialElectionFragmentFragmentDoc"],
    "\nfragment USPresidentialVotingAreaElectionFragment on USPresidentialElection {\n  votingAreas {\n    __typename\n    shortName\n    shortestName\n  }\n  partyResults {\n    party {\n      ...PartyFragment\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["UsPresidentialVotingAreaElectionFragmentFragmentDoc"],
    "\nfragment USPresidentialVotingAreaFragment on USPresidentialVotingArea {\n  displayName\n  electoralVotes\n  shortestName\n  turnout\n  votePercentage\n  districtResults {\n    name\n    partyResults {\n      party {\n        abbreviation\n        displayName\n        name\n        source\n        sourceId\n        color {\n          primaryColor\n          secondaryColor\n          textColor\n        }\n      }\n      voteCount\n      votePercentage\n    }\n  }\n  partyResults {\n    party {\n      ...PartyFragment\n    }\n    electoralVotes\n    voteCount\n    votePercentage\n  }\n  senateResults {\n    party {\n      abbreviation\n    }\n    seatCount\n  }\n  houseResults {\n    party {\n      abbreviation\n    }\n    seatCount\n  }\n  previousPresidentialResult {\n    party {\n      abbreviation\n      name\n      displayName\n    }\n    electoralVotes\n    voteCount\n  }\n  senateSeatsContested\n  houseSeatsContested\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["UsPresidentialVotingAreaFragmentFragmentDoc"],
    "\nfragment WelshAssemblyElectionFragment on AMSElection {\n      displayName\n      seats {\n        available\n        declared\n      }\n      announcement {\n        message\n        subject\n      }\n      topUpVotingAreas {\n        shortName\n        id\n        name\n        lastUpdated\n        votingStatus\n        partyResults {\n          party {\n            abbreviation\n            displayName\n            name\n          }\n          candidateNominations {\n            resultStatus\n            party {\n              name\n              abbreviation\n            }\n            electedOrder\n          }\n        }\n      }\n      topUpPartyResults {\n        party {\n          abbreviation\n          displayName\n          name\n        }\n        seats {\n          change\n          count\n        }\n        votes {\n          count\n          change\n          percentage\n          percentageChange\n        }\n      }\n      topUpVotingAreasSummary {\n        turnoutPercentage\n        turnoutPercentageChange\n        turnout\n      }\n    }\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["WelshAssemblyElectionFragmentFragmentDoc"],
    "\nfragment WelshAssemblyVotingAreaFragment on AMSTopUpVotingArea {\n  id\n  name\n  displayName\n  electorate\n  shortName\n  turnoutPercentage\n  turnoutPercentageChange\n  votingStatus\n  lastUpdated\n  votingAreas {\n    id\n    displayName\n    gainHold\n    electedCandidate {\n      party {\n        abbreviation\n        displayName\n        name\n      }\n    }\n    previouslyElectedCandidate {\n      party {\n        abbreviation\n        displayName\n        name\n      }\n    }\n  }\n  partyResults {\n    party {\n      ...PartyFragment\n    }\n    candidateNominations {\n      candidate {\n        firstName\n        surname\n      }\n      resultStatus\n      electedOrder\n    }\n    seats {\n      count\n      change\n    }\n    votes {\n      percentageChange\n      percentage\n      count\n      change\n    }\n  }\n  electedCandidates {\n    candidate {\n      firstName\n      surname\n    }\n    party {\n      ...PartyFragment\n    }\n    electedOrder\n  }\n  seats {\n    available\n    declared\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["WelshAssemblyVotingAreaFragmentFragmentDoc"],
    "\nquery GetTopUpVotingAreaData($electionId: String!, $votingAreaId: String!) {\n  election(id: $electionId) {\n    __typename\n    ... on AMSElection {\n      votingAreasCount\n      votingAreasDeclared\n    }\n  }\n  votingArea: topUpVotingArea(electionId: $electionId, id: $votingAreaId) {\n    __typename\n    shortName\n    votingStatus\n    ...WelshAssemblyVotingAreaFragment\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["GetTopUpVotingAreaDataDocument"],
    "\nquery GetVotingAreaData($electionId: String!, $votingAreaId: String!) {\n  election(id: $electionId) {\n    __typename\n    ...USPresidentialVotingAreaElectionFragment\n  }\n  votingArea(electionId: $electionId, id: $votingAreaId) {\n    __typename\n    shortName\n    name\n    displayName\n    votingStatus\n    ...LocalCouncilVotingAreaFragment\n    ...UkGeneralVotingAreaFragment\n    ...NorthernIrelandVotingAreaFragment\n    ...USPresidentialVotingAreaFragment\n    ...ScottishParliamentVotingAreaFragment\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["GetVotingAreaDataDocument"],
    "\nquery GetWardData($electionId: String!, $votingAreaId: String!, $wardId: String!) {\n  votingArea(electionId: $electionId, id: $votingAreaId) {\n    __typename\n    shortName\n    votingStatus\n    ... on LocalCouncilVotingArea {\n      wards(wardId: $wardId) {\n        id\n        displayName\n        gainHold\n        lastUpdated\n        status\n        seatsUp\n        seatOrder\n        partyResults {\n          party {\n            ...PartyFragment\n          }\n          seatsWon\n          seatsDefending\n          seatsChange\n          voteCount\n        }\n        gainHoldBySeats {\n          gainHoldStatus\n          partyAbbreviation\n          partyDisplayName\n          previousPartyAbbreviation\n        }\n        incumbentParties\n      }\n    }\n  }\n}\n": __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["GetWardDataDocument"]
};
function gql(source) {
    return documents[source] ?? {};
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/index.ts [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/gql.ts [client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/graphql/documents/election.query.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ELECTION_QUERY",
    ()=>ELECTION_QUERY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/index.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/gql.ts [client] (ecmascript)");
;
const ELECTION_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["gql"])(`
query GetElectionData($electionId: String!) {
  election(id: $electionId) {
    __typename
    electionType
    displayName
    seats {
      available
      declared
    }
    votingAreasCount
    votingAreasDeclared
    ...LocalCouncilElectionFragment
    ...UkGeneralElectionFragment
    ...NorthernIrelandElectionFragment
    ...USPresidentialElectionFragment
    ...ScottishParliamentElectionFragment
    ...WelshAssemblyElectionFragment
    ...ScottishParliamentElectionFragment
  }
}
`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/graphql/documents/elections.query.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LANDING_PAGE_QUERY",
    ()=>LANDING_PAGE_QUERY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/index.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/gql.ts [client] (ecmascript)");
;
const LANDING_PAGE_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["gql"])(`
query GetLandingPageData($englishCouncilElectionId: String!, $scottishParliamentElectionId: String!, $welshAssemblyElectionId: String!) {
  englishCouncilElection: election(id: $englishCouncilElectionId) {
    ... on LocalCouncilElection {
      partyResults {
        party {
          abbreviation
          displayName
          name
        }
        seats {
          change
          count
        }
      }
      seats {
        available
        declared
      }
      electionType
      displayName
      votingAreasCount
      votingAreasDeclared
    }
  }
  scottishParliamentElection: election(id: $scottishParliamentElectionId) {
    ... on AMSElection {
      partyResults {
        party {
          abbreviation
          displayName
          name
        }
        seats {
          change
          count
        }
      }
      topUpPartyResults {
        party {
          abbreviation
          displayName
          name
        }
        seats {
          change
          count
        }
      }
      seats {
        available
        declared
      }
      electionType
      displayName
      votingAreasCount
      votingAreasDeclared
    }
  }
  welshAssemblyElection: election(id: $welshAssemblyElectionId) {
    ... on AMSElection {
      topUpPartyResults {
        party {
          abbreviation
          displayName
          name
        }
        seats {
          change
          count
        }
      }
      seats {
        available
        declared
      }
      electionType
      displayName
      votingAreasCount
      votingAreasDeclared
    }
  }
}
`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/graphql/documents/topUpVotingArea.query.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOP_UP_VOTING_AREA_QUERY",
    ()=>TOP_UP_VOTING_AREA_QUERY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/index.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/gql.ts [client] (ecmascript)");
;
const TOP_UP_VOTING_AREA_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["gql"])(`
query GetTopUpVotingAreaData($electionId: String!, $votingAreaId: String!) {
  election(id: $electionId) {
    __typename
    ... on AMSElection {
      votingAreasCount
      votingAreasDeclared
    }
  }
  votingArea: topUpVotingArea(electionId: $electionId, id: $votingAreaId) {
    __typename
    shortName
    votingStatus
    ...WelshAssemblyVotingAreaFragment
  }
}
`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/graphql/documents/votingArea.query.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VOTING_AREA_QUERY",
    ()=>VOTING_AREA_QUERY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/index.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/gql.ts [client] (ecmascript)");
;
const VOTING_AREA_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["gql"])(`
query GetVotingAreaData($electionId: String!, $votingAreaId: String!) {
  election(id: $electionId) {
    __typename
    ...USPresidentialVotingAreaElectionFragment
  }
  votingArea(electionId: $electionId, id: $votingAreaId) {
    __typename
    shortName
    name
    displayName
    votingStatus
    ...LocalCouncilVotingAreaFragment
    ...UkGeneralVotingAreaFragment
    ...NorthernIrelandVotingAreaFragment
    ...USPresidentialVotingAreaFragment
    ...ScottishParliamentVotingAreaFragment
  }
}
`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/graphql/documents/wardData.query.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WARD_DATA_QUERY",
    ()=>WARD_DATA_QUERY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/index.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/gql.ts [client] (ecmascript)");
;
const WARD_DATA_QUERY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$gql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["gql"])(`
query GetWardData($electionId: String!, $votingAreaId: String!, $wardId: String!) {
  votingArea(electionId: $electionId, id: $votingAreaId) {
    __typename
    shortName
    votingStatus
    ... on LocalCouncilVotingArea {
      wards(wardId: $wardId) {
        id
        displayName
        gainHold
        lastUpdated
        status
        seatsUp
        seatOrder
        partyResults {
          party {
            ...PartyFragment
          }
          seatsWon
          seatsDefending
          seatsChange
          voteCount
        }
        gainHoldBySeats {
          gainHoldStatus
          partyAbbreviation
          partyDisplayName
          previousPartyAbbreviation
        }
        incumbentParties
      }
    }
  }
}
`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/graphql/queries.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getQueryData",
    ()=>getQueryData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$election$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/documents/election.query.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$elections$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/documents/elections.query.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$topUpVotingArea$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/documents/topUpVotingArea.query.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$votingArea$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/documents/votingArea.query.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$wardData$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/documents/wardData.query.ts [client] (ecmascript)");
;
;
;
;
;
class UnsupportedElectionTypeError extends Error {
    constructor(electionType){
        super(`Unsupported election type '${electionType}' when getting GQL query.`);
        this.name = 'UnsupportedElectionTypeError';
    }
}
const getQueryData = (queryType, electionType)=>{
    if (queryType !== 'LANDING_PAGE_QUERY') {
        if (![
            'UK_GENERAL',
            'NORTHERN_IRELAND',
            'ENGLISH_COUNCIL',
            'US_PRESIDENTIAL',
            'WELSH_ASSEMBLY',
            'SCOTTISH_PARLIAMENT'
        ].includes(electionType || '')) {
            throw new UnsupportedElectionTypeError(electionType);
        }
    }
    if (queryType === 'ELECTIONS_DATA_QUERY') {
        return {
            key: queryType,
            query: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$election$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["ELECTION_QUERY"],
            validate: (data)=>{
                if (!data?.election) {
                    return false;
                }
                return true;
            }
        };
    }
    if (queryType === 'LANDING_PAGE_QUERY') {
        return {
            key: queryType,
            query: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$elections$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["LANDING_PAGE_QUERY"],
            validate: (data)=>{
                if (!data) {
                    return false;
                }
                return true;
            }
        };
    }
    if (queryType === 'CONSTITUENCY_DATA_QUERY') {
        return {
            key: queryType,
            query: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$votingArea$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["VOTING_AREA_QUERY"],
            validate: (data)=>{
                if (!data?.votingArea || !data?.votingArea?.shortName) {
                    return false;
                }
                return true;
            }
        };
    }
    if (queryType === 'REGION_DATA_QUERY') {
        return {
            key: queryType,
            query: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$topUpVotingArea$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["TOP_UP_VOTING_AREA_QUERY"],
            validate: (data)=>{
                if (!data?.votingArea || !data?.votingArea?.shortName) {
                    return false;
                }
                return true;
            }
        };
    }
    if (queryType === 'WARD_DATA_QUERY') {
        return {
            key: queryType,
            query: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$documents$2f$wardData$2e$query$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["WARD_DATA_QUERY"],
            validate: (data)=>{
                if (!data?.votingArea || !data?.votingArea?.wards || data.votingArea.wards.length === 0) {
                    return false;
                }
                return true;
            }
        };
    }
    throw new Error(`Unsupported query type '${queryType}'.`);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendPercentSignToNumber",
    ()=>appendPercentSignToNumber,
    "capitalizeFirstLetter",
    ()=>capitalizeFirstLetter,
    "extractSurname",
    ()=>extractSurname,
    "formatNumberToPercentageWithOneDecimalPlace",
    ()=>formatNumberToPercentageWithOneDecimalPlace,
    "getUSPartyName",
    ()=>getUSPartyName,
    "prependSignToParseableNumber",
    ()=>prependSignToParseableNumber,
    "prettifyNumber",
    ()=>prettifyNumber,
    "setElectionStatus",
    ()=>setElectionStatus,
    "setValue",
    ()=>setValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/decimal.js/decimal.mjs [client] (ecmascript)");
;
const capitalizeFirstLetter = function(string) {
    if (!string) {
        return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const appendPercentSignToNumber = function(num) {
    const parsedNumber = Number(num);
    if (isNaN(parsedNumber) || num === null) {
        return '';
    }
    return `${num}%`;
};
const prettifyNumber = function(num) {
    const parsedNumber = Number(num);
    if (isNaN(parsedNumber) || num === null) {
        return '';
    }
    return num.toLocaleString('en-GB');
};
const prependSignToParseableNumber = function(value) {
    let unformattedValue = value;
    if (typeof value === 'string') {
        // remove commas before checking if the value is numeric
        unformattedValue = value.replaceAll(',', '');
    }
    const isNotNumeric = isNaN(Number(unformattedValue)) || unformattedValue === null || unformattedValue === '';
    if (isNotNumeric) {
        return value;
    }
    // use the original value when prepending to retain commas
    const numberString = value.toString();
    if (numberString[0] === '-') {
        // replace hyphen-minus with minus sign
        return numberString.replace('-', '−');
    }
    // prepend a plus if its not a 0
    return `${numberString === '0' ? '' : '+'}${numberString}`;
};
const setValue = function({ value, fallback = '-', replace }) {
    if (value !== 0 && !value) {
        return fallback;
    }
    if (replace?.old && replace?.new) {
        return value.toString().replace(replace.old, replace.new);
    }
    return value;
};
const setElectionStatus = function({ statusType = 'status', winner, sittingParty, gainOrHold, status, isAnnouncementBanner = false }) {
    if (statusType === 'gainOrHold') {
        if (!gainOrHold || !winner) {
            return isAnnouncementBanner ? 'Result not yet in' : undefined;
        }
        if (gainOrHold === 'HOLD' && winner?.match(/noc|no overall control/i)) {
            return `Remains ${winner}`;
        }
        if (gainOrHold === 'GAIN' && winner?.match(/noc|no overall control/i)) {
            return `${sittingParty} lose to ${winner}`;
        }
        return `${winner} ${gainOrHold}${gainOrHold === 'GAIN' && sittingParty ? ` from ${sittingParty}` : ''}`;
    }
    if (statusType === 'us-status') {
        if (!winner) {
            return 'result not in';
        }
        return winner;
    }
    if (statusType === 'status') {
        return status;
    }
};
const extractSurname = function(fullName) {
    if (fullName === 'RESULT NOT IN') {
        return fullName;
    }
    return fullName.substring(fullName.lastIndexOf(' ') + 1);
};
const getUSPartyName = (partyAbbreviation)=>{
    switch(partyAbbreviation){
        case 'US-Dem':
            return 'Democrat';
        case 'US-Rep':
            return 'Republican';
        case 'US-OTH':
            return 'Other parties';
        default:
            return partyAbbreviation;
    }
};
function formatNumberToPercentageWithOneDecimalPlace(num) {
    const parsedNumber = Number(num);
    if (isNaN(parsedNumber) || num === null) {
        return '';
    }
    const decimal = new __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Decimal"](num);
    return `${num < 0.1 ? '<' : ''}${decimal.toDecimalPlaces(1, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$decimal$2e$js$2f$decimal$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Decimal"].ROUND_CEIL)}${decimal.decimalPlaces() === 0 ? '.0' : ''}%`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/array-helpers.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Order",
    ()=>Order,
    "getItem",
    ()=>getItem,
    "mergeItems",
    ()=>mergeItems,
    "sortItems",
    ()=>sortItems,
    "splitArrayByValues",
    ()=>splitArrayByValues
]);
const getItem = (array, path, value)=>{
    return array.find((item)=>{
        const match = path.split('.').reduce((a, v)=>{
            if (!a) {
                return null;
            }
            return a[v];
        }, item);
        if (!match) {
            return undefined;
        }
        if (match === value) {
            return item;
        }
        return undefined;
    });
};
const splitArrayByValues = (key, values, array)=>{
    const newArray = values.map((value)=>{
        return getItem(array, key, value);
    }).filter((x)=>x !== undefined);
    const oldArray = array.filter((item)=>!newArray.includes(item));
    return {
        newArray,
        oldArray
    };
};
var Order = /*#__PURE__*/ function(Order) {
    Order["desc"] = "desc";
    Order["asc"] = "asc";
    return Order;
}({});
const compare = (a, b, sortCriteria)=>{
    const keyA = sortCriteria[0].sortField.split('.').reduce((o, v)=>o[v], a);
    const keyB = sortCriteria[0].sortField.split('.').reduce((o, v)=>o[v], b);
    const direction = sortCriteria[0].direction ? sortCriteria[0].direction : "asc";
    if (keyA < keyB) {
        return direction === "desc" ? 1 : -1;
    }
    if (keyA > keyB) {
        return direction === "desc" ? -1 : 1;
    }
    if (sortCriteria.length > 1) {
        // recurse so that we can compare the next sort field if the values for the current field are the same.
        return compare(a, b, sortCriteria.slice(1));
    }
    return 0;
};
const sortItems = (array = [], sortCriteria)=>{
    array.sort((a, b)=>compare(a, b, sortCriteria));
    return array;
};
const mergeItems = (position = 0, items = [], replace = {})=>{
    const left = items.slice(0, position);
    const right = items.slice(position);
    const merged = {};
    if (right.length === 0) {
        return left;
    }
    // merge all keys
    right.forEach((item)=>{
        Object.assign(merged, item);
    });
    // reset all numerical values to 0
    right.forEach((item)=>{
        Object.entries(item).forEach((entry)=>{
            if (typeof entry[1] === 'number') {
                merged[entry[0]] = 0;
            }
        });
    });
    // add all numerical values together
    right.forEach((item)=>{
        Object.entries(item).forEach((entry)=>{
            if (typeof entry[1] === 'number') {
                merged[entry[0]] += entry[1];
            }
        });
    });
    // add overrides for the other category
    Object.entries(replace).forEach((item)=>{
        merged[item[0]] = item[1];
    });
    return [
        ...left,
        merged
    ];
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculatePercentage",
    ()=>calculatePercentage,
    "formatToXDecimalPlaces",
    ()=>formatToXDecimalPlaces,
    "roundDownToOneDecimalPlace",
    ()=>roundDownToOneDecimalPlace,
    "roundToXDecimalPlaces",
    ()=>roundToXDecimalPlaces
]);
const roundToXDecimalPlaces = function(number, places = 1) {
    return Math.round(number * 10 ** places) / 10 ** places;
};
const roundDownToOneDecimalPlace = function(number, places = 1) {
    return Math.floor(number * 10) / 10;
};
const calculatePercentage = function(number, totalNumber) {
    if (totalNumber) {
        return number / totalNumber * 100;
    }
    return 0;
};
const formatToXDecimalPlaces = function(number, places = 1) {
    const factor = 10 ** places;
    const rounded = Math.round((number + Number.EPSILON) * factor) / factor;
    return rounded.toFixed(places);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/analytics.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "manuallyTrackClick",
    ()=>manuallyTrackClick
]);
function manuallyTrackClick(element) {
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.skyTags !== 'undefined') {
        const { skyTags } = window;
        if (skyTags.queue && skyTags.builders) {
            skyTags.queue.push([
                'event',
                skyTags.builders.elementToEvent(element)
            ], [
                'track'
            ]);
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/tag.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
const Tag = ({ as: El = 'div', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(El, {
        ...props
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/app/utils/tag.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Tag;
const __TURBOPACK__default__export__ = Tag;
var _c;
__turbopack_context__.k.register(_c, "Tag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2023$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/logo-elections-2023.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2024$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/logo-elections-2024.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2025$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2025$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/gdp-uk-news-frontend/public/resources/elections/logo-elections-2025.png.mjs { IMAGE => "[project]/gdp-uk-news-frontend/public/resources/elections/logo-elections-2025.png (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/gdp-uk-news-frontend/public/resources/elections/logo-elections-2026.png.mjs { IMAGE => "[project]/gdp-uk-news-frontend/public/resources/elections/logo-elections-2026.png (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$general$2d$election$2d$2019$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/logo-general-election-2019.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$general$2d$election$2d$2024$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$general$2d$election$2d$2024$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/gdp-uk-news-frontend/public/resources/elections/logo-general-election-2024.png.mjs { IMAGE => "[project]/gdp-uk-news-frontend/public/resources/elections/logo-general-election-2024.png (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$northern$2d$ireland$2d$2022$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/logo-northern-ireland-2022.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$us$2d$2024$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$us$2d$2024$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/gdp-uk-news-frontend/public/resources/elections/logo-us-2024.png.mjs { IMAGE => "[project]/gdp-uk-news-frontend/public/resources/elections/logo-us-2024.png (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$england$2d$councils$2d$2026$2d$both$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-england-councils-2026-both.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$england$2d$councils$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-england-councils.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$england$2d$county$2d$councils$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-england-county-councils.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$ni$2d$2022$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-ni-2022.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$scottish$2d$parliament$2d$constituencies$2d$2026$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-scottish-parliament-constituencies-2026.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$scottish$2d$parliament$2d$regions$2d$2026$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-scottish-parliament-regions-2026.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$uk$2d$2019$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-uk-2019.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$uk$2d$2024$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-uk-2024.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$us$2d$2024$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-us-2024.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$welsh$2d$assembly$2d$2026$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/map-welsh-assembly-2026.svg.js [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const assets = {
    LANDING_PAGE: {
        '2026': {
            logo: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "2026 Elections Logo",
                    ...props
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx",
                    lineNumber: 37,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0)),
            map: null
        }
    },
    UK_GENERAL: {
        '2019': {
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$uk$2d$2019$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$general$2d$election$2d$2019$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
        },
        '2024': {
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$uk$2d$2024$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            logo: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$general$2d$election$2d$2024$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$general$2d$election$2d$2024$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "General election logo",
                    ...props
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx",
                    lineNumber: 48,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0))
        }
    },
    ENGLISH_COUNCIL: {
        '2022': {
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$england$2d$councils$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2023$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
        },
        '2023': {
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$england$2d$councils$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2023$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
        },
        '2024': {
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$england$2d$councils$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2024$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
        },
        '2025': {
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$england$2d$county$2d$councils$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            logo: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2025$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2025$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Local elections 2025 logo",
                    ...props
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx",
                    lineNumber: 66,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0))
        },
        '2026': {
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$england$2d$councils$2d$2026$2d$both$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            logo: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "English Councils 2026 logo",
                    ...props
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx",
                    lineNumber: 70,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0))
        }
    },
    NORTHERN_IRELAND: {
        '2017': {
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$northern$2d$ireland$2d$2022$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$ni$2d$2022$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
        },
        '2022': {
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$ni$2d$2022$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$northern$2d$ireland$2d$2022$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
        }
    },
    US_PRESIDENTIAL: {
        '2024': {
            logo: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$us$2d$2024$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$us$2d$2024$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "US Election Logo",
                    ...props
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx",
                    lineNumber: 85,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0)),
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$us$2d$2024$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
        }
    },
    WELSH_ASSEMBLY: {
        '2026': {
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$welsh$2d$assembly$2d$2026$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            logo: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Senedd Cymru 2026 logo",
                    ...props
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx",
                    lineNumber: 92,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0))
        }
    },
    SCOTTISH_PARLIAMENT: {
        '2026': {
            logo: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$logo$2d$elections$2d$2026$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Scottish Parliament 2026 Logo",
                    ...props
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx",
                    lineNumber: 97,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0)),
            map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$scottish$2d$parliament$2d$constituencies$2d$2026$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
            additionalMap: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$map$2d$scottish$2d$parliament$2d$regions$2d$2026$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
        }
    }
};
const __TURBOPACK__default__export__ = assets;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getElection",
    ()=>getElection,
    "getId",
    ()=>getId,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$app$2d$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/app-config.ts [client] (ecmascript)");
;
const getElection = (electionSlug)=>Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$app$2d$config$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["elections"]).find((value)=>value.slug === electionSlug);
const getId = (string, seperator)=>string.split(`${seperator}`).reverse()[0].toLowerCase();
const slugify = (string = '')=>(string ?? '').trim().replace(/\s/g, '-').replace(/&/g, 'and').replace(/,/g, '').toLowerCase();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/id-from-name.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSkyName",
    ()=>getSkyName,
    "idFromName",
    ()=>idFromName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$data$2f$sky$2d$names$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/data/sky-names.ts [client] (ecmascript)");
;
const getSkyName = (constituencyName)=>__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$data$2f$sky$2d$names$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"][constituencyName];
const idFromName = (name)=>{
    const skyName = getSkyName(name) ?? name;
    return skyName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase().replace(/ /g, '-').replace(/\band\b|&|,|'|\(|\)/g, '').split('-').sort().join('-').replace(/^-|-$/, '');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/fetcher.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetcher",
    ()=>fetcher
]);
const fetcher = async (url)=>{
    const res = await fetch(url);
    if (!res.ok) {
        const error = new Error(`An error occurred while fetching data from ${url}. - ${res.status}`);
        error.status = res.status;
        throw error;
    }
    return res.json();
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/postcode-helpers.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchVotingAreas",
    ()=>fetchVotingAreas,
    "getOutcodes",
    ()=>getOutcodes,
    "getQueryFields",
    ()=>getQueryFields,
    "isFullPostcode",
    ()=>isFullPostcode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$fetcher$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/fetcher.js [client] (ecmascript)");
;
// matches a full UK postcode
const postcodeRegex = /^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/;
// matches a full UK postcode, but every part of the incode is optional,
// also contains two capturing groups for both possible outcodes e.g. LS1 and LS13
const outcodeRegex = /^(([A-Z][A-HJ-Y]?\d)[A-Z\d]?) ?\d?[A-Z]{0,2}$/;
const isFullPostcode = (postcode)=>postcodeRegex.test(postcode);
const getOutcodes = (postcode)=>{
    const outcodeMatches = postcode.match(outcodeRegex);
    if (!outcodeMatches) {
        return;
    }
    const outcode1 = outcodeMatches[1];
    const outcode2 = outcodeMatches[2];
    return outcode1 === outcode2 ? [
        outcode1
    ] : [
        outcode1,
        outcode2
    ];
};
const fetchVotingAreas = async (code, electionType)=>{
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$fetcher$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fetcher"])(`/api/postcodes/${encodeURIComponent(code)}?electionType=${electionType}`);
    } catch  {
        return [];
    }
};
const getQueryFields = (electionType)=>{
    switch(electionType){
        case 'ENGLISH_COUNCIL':
            return [
                'admin_district',
                'admin_county'
            ];
        case 'UK_GENERAL':
        case 'WELSH_ASSEMBLY':
        case 'NORTHERN_IRELAND':
            return [
                'parliamentary_constituency'
            ];
        case 'SCOTTISH_PARLIAMENT':
            return [
                'scottish_parliamentary_constituency'
            ];
        default:
            break;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/election-types.ts [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/graphql.ts [client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/scottish-region-lookup.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScottishParentRegionMap",
    ()=>createScottishParentRegionMap,
    "scottishRegionLookup",
    ()=>scottishRegionLookup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/id-from-name.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)");
;
;
function scottishRegionLookup(constituencyName) {
    switch(constituencyName){
        // -------------------------
        // east-north-scotland
        // -------------------------
        case 'aberdeen-central':
        case 'aberdeen-deeside-kincardine-north':
        case 'aberdeen-kincardine-north-south':
        case 'aberdeen-donside':
        case 'aberdeenshire-east':
        case 'aberdeenshire-west':
        case 'angus-mearns-north':
        case 'angus-south':
        case 'banffshire-buchan-coast':
        case 'city-dundee-east':
        case 'city-dundee-west':
            return 'east-north-scotland';
        // -------------------------
        // fife-mid-scotland
        // -------------------------
        case 'clackmannanshire-dunblane':
        case 'cowdenbeath':
        case 'dunfermline':
        case 'east-fife-north':
        case 'kirkcaldy':
        case 'fife-glenrothes-mid':
        case 'north-perthshire':
        case 'kinross-perthshire-shire-south':
        case 'stirling':
            return 'fife-mid-scotland';
        // -------------------------
        // scotland-west
        // -------------------------
        case 'clydebank-milngavie':
        case 'cunninghame-north':
        case 'cunninghame-south':
        case 'dumbarton':
        case 'eastwood':
        case 'inverclyde':
        case 'paisley':
        case 'cardonald-north-renfrewshire':
        case 'levern-renfrewshire-valley-west':
        case 'bearsden-strathkelvin':
            return 'scotland-west';
        // -------------------------
        // highlands-islands
        // -------------------------
        case 'argyll-bute':
        case 'caithness-ross-sutherland':
        case 'inverness-nairn':
        case 'moray':
        case 'isles-western':
        case 'islands-orkney':
        case 'islands-shetland':
        case 'badenoch-lochaber-skye':
            return 'highlands-islands';
        // -------------------------
        // central-lothians-scotland-west
        // -------------------------
        case 'airdrie':
        case 'airdrie-shotts':
        case 'almond-valley':
        case 'bathgate':
        case 'chryston-coatbridge':
        case 'cumbernauld-kilsyth':
        case 'east-falkirk-linlithgow':
        case 'falkirk-west':
        case 'motherwell-wishaw':
        case 'bellshill-uddingston':
            return 'central-lothians-scotland-west';
        // -------------------------
        // scotland-south
        // -------------------------
        case 'ayr':
        case 'carrick-cumnock-doon-valley':
        case 'clydesdale':
        case 'dumfriesshire':
        case 'east-kilbride':
        case 'berwickshire-ettrick-roxburgh':
        case 'dumfries-galloway-west':
        case 'hamilton-larkhall-stonehouse':
        case 'irvine-kilmarnock-valley':
        case 'lauderdale-midlothian-south-tweeddale':
            return 'scotland-south';
        // -------------------------
        // east-edinburgh-lothians
        // -------------------------
        case 'coast-east-lammermuirs-lothian':
        case 'central-edinburgh':
        case 'eastern-edinburgh-musselburgh-tranent':
        case 'eastern-edinburgh-leith-north':
        case 'edinburgh-north-western':
        case 'edinburgh-northern':
        case 'edinburgh-south-western':
        case 'edinburgh-southern':
        case 'midlothian-north':
            return 'east-edinburgh-lothians';
        // -------------------------
        // glasgow
        // -------------------------
        case 'anniesland-glasgow':
        case 'baillieston-glasgow-shettleston':
        case 'cathcart-glasgow-pollok':
        case 'glasgow-cathcart':
        case 'cathcart-glasgow':
        case 'central-glasgow':
        case 'easterhouse-glasgow-springburn':
        case 'glasgow-kelvin-maryhill':
        case 'glasgow-southside':
        case 'cambuslang-rutherglen':
            return 'glasgow';
        default:
            return null;
    }
}
function createScottishParentRegionMap(constituencies, regions) {
    const map = {};
    // Create a lookup of region idFromName to region data (with slugified version for URLs)
    const regionLookup = {};
    regions.forEach((region)=>{
        const displayName = region.name || region.displayName || '';
        const normalizedRegionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(displayName);
        const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(displayName);
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getId"])(region.id, '_');
        regionLookup[normalizedRegionName] = {
            id,
            slug
        };
    });
    // Map each constituency to its parent region
    constituencies.forEach((constituency)=>{
        const displayName = constituency.name || constituency.displayName || '';
        const normalizedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(displayName);
        const regionSlug = scottishRegionLookup(normalizedName);
        if (regionSlug && regionLookup[regionSlug]) {
            map[constituency.id] = regionLookup[regionSlug];
        }
    });
    return map;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/generate-election-url.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateElectionUrl",
    ()=>generateElectionUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/id-from-name.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$scottish$2d$region$2d$lookup$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/scottish-region-lookup.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)");
;
;
;
function generateElectionUrl(options) {
    const { electionSlug, electionType, votingArea, parentRegion } = options;
    const displayName = votingArea.name || votingArea?.displayName || votingArea.shortName || '';
    const areaId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getId"])(votingArea.id, '_');
    const slugifiedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(displayName);
    // US Presidential elections don't include the ID in the URL
    if (electionType === 'US_PRESIDENTIAL') {
        return `/elections/${electionSlug}/${slugifiedName}`;
    }
    // Scottish Parliament has special URL structure for constituencies
    if (electionType === 'SCOTTISH_PARLIAMENT') {
        const normalizedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(displayName);
        const regionSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$scottish$2d$region$2d$lookup$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["scottishRegionLookup"])(normalizedName);
        if (regionSlug) {
            // This is a constituency - include parent region with ID in URL
            // Format: /elections/{election}/{parent-region-slug}-{region-id}/{constituency-slug}-{id}
            if (parentRegion) {
                // We have the parent region data with ID - use it
                return `/elections/${electionSlug}/${parentRegion.slug}-${parentRegion.id}/${slugifiedName}-${areaId}`;
            } else {
                // Fallback: No parent region ID available, use just the slug
                return `/elections/${electionSlug}/${regionSlug}/${slugifiedName}-${areaId}`;
            }
        } else {
            // This is a region - simple format
            // Format: /elections/{election}/{region-slug}-{id}
            return `/elections/${electionSlug}/${slugifiedName}-${areaId}`;
        }
    }
    // All other elections use simple format: /elections/{election}/{area-slug}-{id}
    return `/elections/${electionSlug}/${slugifiedName}-${areaId}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/party-helpers.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDataParty",
    ()=>getDataParty,
    "getMapPartyLabel",
    ()=>getMapPartyLabel,
    "getSittingPartyName",
    ()=>getSittingPartyName,
    "getWinnerName",
    ()=>getWinnerName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$us$2d$parties$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/us-parties.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
;
;
const getDataParty = (partyResults, electedCandidate, controllingParty, electoralVotes, votingStatus, electionType)=>{
    if (electionType === 'US_PRESIDENTIAL' && electoralVotes) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$us$2d$parties$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getWinningParty"])(partyResults, electoralVotes)?.party.abbreviation || 'us-baseline';
    }
    return electedCandidate?.party?.abbreviation || controllingParty?.abbreviation || votingStatus || 'baseline';
};
const getWinnerName = (partyResults, electoralVotes, electedCandidate, controllingParty, useDisplayName)=>{
    if (electoralVotes && partyResults) {
        const winningParty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$us$2d$parties$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getWinningParty"])(partyResults, electoralVotes);
        const name = useDisplayName ? winningParty?.party.displayName : winningParty?.party.name;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(name || '');
    }
    const party = electedCandidate?.party || controllingParty;
    return useDisplayName ? party?.displayName : party?.name;
};
const getSittingPartyName = (previouslyElectedCandidate, previouslyControllingParty, useDisplayName)=>{
    const party = previouslyElectedCandidate?.party || previouslyControllingParty;
    return useDisplayName ? party?.displayName : party?.name;
};
const getMapPartyLabel = (area, electionType)=>{
    if (area.electedCandidate?.party || area.controllingParty) {
        let winner;
        if (electionType === 'US_PRESIDENTIAL') {
            winner = area.controllingParty?.name;
        } else {
            winner = getWinnerName(null, null, area.electedCandidate, area.controllingParty, true);
        }
        const sitting = getSittingPartyName(area.previouslyElectedCandidate, area.previouslyControllingParty, true);
        const gainOrHold = area.gainOrHold || area.gainHold;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setElectionStatus"])({
            statusType: electionType === 'US_PRESIDENTIAL' ? 'us-status' : 'gainOrHold',
            winner,
            sittingParty: sitting,
            gainOrHold: gainOrHold
        }) ?? winner ?? '';
    }
    return area.votingStatus?.match(/BASELINE|IN_PROGRESS/) ? 'Result Not In' : '';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/us-helpers.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCandidateSurnames",
    ()=>getCandidateSurnames,
    "getElectoralVotesIn",
    ()=>getElectoralVotesIn,
    "getWinningParty",
    ()=>getWinningParty,
    "orderPartyResults",
    ()=>orderPartyResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
;
function orderPartyResults(partyResults, partiesOrder) {
    const partyResultsWithOrderedParties = partyResults.sort((a, b)=>{
        return partiesOrder.indexOf(a.party.abbreviation) - partiesOrder.indexOf(b.party.abbreviation);
    });
    return partyResultsWithOrderedParties;
}
function getWinningParty(partyResults) {
    const winningParty = partyResults.filter((partyResult)=>{
        return partyResult.seatCount > 0;
    });
    if (!winningParty.length) {
        winningParty.push({
            party: {
                abbreviation: 'US-Undeclared-banner',
                displayName: 'Result Not In'
            },
            seatCount: 0,
            voteCount: 0
        });
    }
    return winningParty;
}
function getCandidateSurnames(partyResults, mainParties) {
    const filteredPartyResults = partyResults?.map((partyResult)=>({
            party: {
                abbreviation: `US-${partyResult.party.abbreviation}`,
                displayName: partyResult.party.displayName || partyResult.party.name
            }
        })).filter((partyResult)=>mainParties.includes(partyResult.party.abbreviation));
    const demSurname = filteredPartyResults?.find((result)=>result.party.abbreviation === 'US-Dem')?.party.displayName;
    const repSurname = filteredPartyResults?.find((result)=>result.party.abbreviation === 'US-Rep')?.party.displayName;
    return {
        'US-Dem': demSurname ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(demSurname) : 'Democrats',
        'US-Rep': repSurname ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(repSurname) : 'Republicans'
    };
}
function getElectoralVotesIn(partyResults) {
    let electoralVotes = 0;
    partyResults.forEach((partyResult)=>{
        electoralVotes += partyResult.seatCount;
    });
    return electoralVotes;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/us-data-helpers.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transformVoteShareData",
    ()=>transformVoteShareData
]);
function transformVoteShareData(announcementData, partyResultsData, mainParties) {
    let announcement = {
        party: 'US-Unassociated',
        statusText: 'Awaiting Results'
    };
    if (announcementData) {
        const party = announcementData.subject !== null ? `US-${announcementData.subject}` : 'US-Unassociated';
        announcement = {
            party,
            statusText: announcementData.message
        };
    }
    const mainPartyResults = partyResultsData?.map((partyResult)=>({
            party: {
                abbreviation: `US-${partyResult.party.abbreviation}`,
                displayName: partyResult.party.displayName || partyResult.party.name
            },
            seatCount: partyResult.electoralVotes,
            votePercentage: partyResult.votePercentage
        })).filter((partyResult)=>mainParties.includes(partyResult.party.abbreviation)) || [];
    const sortedPartyResults = mainPartyResults.length === 2 ? [
        mainPartyResults.find((r)=>r.party.abbreviation === 'US-Dem'),
        mainPartyResults.find((r)=>r.party.abbreviation === 'US-Rep')
    ] : [];
    return {
        announcement,
        mainPartyResults: sortedPartyResults
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/election-type-helper.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConsituencyTypeComponent",
    ()=>getConsituencyTypeComponent,
    "getElectionTypeComponent",
    ()=>getElectionTypeComponent,
    "getElectionTypeIframeComponent",
    ()=>getElectionTypeIframeComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$general$2d$election$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$local$2d$councils$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$local$2d$councils$2d$ward$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$northern$2d$ireland$2d$assembly$2d$constituency$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$scottish$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$scottish$2d$region$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$us$2d$election$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$welsh$2d$assembly$2d$region$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$general$2d$election$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$general$2d$election$2d$seats$2d$iframe$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/general-election-seats-iframe.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$local$2d$councils$2d$iframe$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/local-councils-iframe.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$northern$2d$ireland$2d$assembly$2d$iframe$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/northern-ireland-assembly-iframe.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$us$2d$election$2d$iframe$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-iframe.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$us$2d$election$2d$map$2d$iframe$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-map-iframe.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$us$2d$election$2d$remaining$2d$results$2d$iframe$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-remaining-results-iframe.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$local$2d$councils$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$northern$2d$ireland$2d$assembly$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$scottish$2d$parliament$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$us$2d$election$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$welsh$2d$assembly$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/id-from-name.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$scottish$2d$region$2d$lookup$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/scottish-region-lookup.ts [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const getElectionTypeComponent = (electionType)=>{
    switch(electionType){
        case 'NORTHERN_IRELAND':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$northern$2d$ireland$2d$assembly$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        case 'UK_GENERAL':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$general$2d$election$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        case 'ENGLISH_COUNCIL':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$local$2d$councils$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        case 'US_PRESIDENTIAL':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$us$2d$election$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        case 'WELSH_ASSEMBLY':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$welsh$2d$assembly$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        case 'SCOTTISH_PARLIAMENT':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$scottish$2d$parliament$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        default:
            break;
    }
};
const getConsituencyTypeComponent = (electionType, data, queryType)=>{
    switch(electionType){
        case 'NORTHERN_IRELAND':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$northern$2d$ireland$2d$assembly$2d$constituency$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        case 'UK_GENERAL':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$general$2d$election$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        case 'ENGLISH_COUNCIL':
            {
                // Determine if it's a ward or council based on the query type
                if (queryType === 'WARD_DATA_QUERY') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$local$2d$councils$2d$ward$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$local$2d$councils$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
            }
        case 'US_PRESIDENTIAL':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$us$2d$election$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        case 'WELSH_ASSEMBLY':
            return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$welsh$2d$assembly$2d$region$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
        case 'SCOTTISH_PARLIAMENT':
            {
                // If a query type was determined server-side, prefer that (region vs constituency).
                if (queryType === 'CONSTITUENCY_DATA_QUERY') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$scottish$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
                }
                if (queryType === 'REGION_DATA_QUERY') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$scottish$2d$region$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
                }
                // Fallback: determine by inspecting the returned data (single-segment URLs).
                if (data?.votingArea?.shortName) {
                    const normalizedName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(data.votingArea.shortName);
                    const isConstituency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$scottish$2d$region$2d$lookup$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["scottishRegionLookup"])(normalizedName) !== null;
                    return isConstituency ? __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$scottish$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$scottish$2d$region$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
                }
                // Default to constituency when unsure
                return __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$scottish$2d$constituency$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"];
            }
        default:
            break;
    }
};
const iframeDictionary = {
    NORTHERN_IRELAND: {
        true: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$northern$2d$ireland$2d$assembly$2d$iframe$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"]
    },
    UK_GENERAL: {
        true: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$general$2d$election$2d$seats$2d$iframe$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"]
    },
    ENGLISH_COUNCIL: {
        true: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$local$2d$councils$2d$iframe$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"]
    },
    US_PRESIDENTIAL: {
        true: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$us$2d$election$2d$iframe$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"],
        map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$us$2d$election$2d$map$2d$iframe$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"],
        undeclared: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$us$2d$election$2d$remaining$2d$results$2d$iframe$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"]
    }
};
const getElectionTypeIframeComponent = (electionType, component)=>{
    if (iframeDictionary[electionType] && iframeDictionary[electionType][component]) {
        return iframeDictionary[electionType][component];
    }
    return null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/app/hooks/use-browser-layout-effect.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
;
const useBrowserLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = useBrowserLayoutEffect;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=gdp-uk-news-frontend_src_app_0i~c20r._.js.map