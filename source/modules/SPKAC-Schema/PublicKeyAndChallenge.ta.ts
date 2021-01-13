/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "x500-ts/dist/node/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta";

/* START_OF_SYMBOL_DEFINITION PublicKeyAndChallenge */
/**
 * @summary PublicKeyAndChallenge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeyAndChallenge ::= SEQUENCE
 *     {
 *     spki SubjectPublicKeyInfo,
 *     challenge IA5String
 *     }
 * ```
 *
 * @class
 */
export class PublicKeyAndChallenge {
    constructor(
        /**
         * @summary `spki`.
         * @public
         * @readonly
         */
        readonly spki: SubjectPublicKeyInfo,
        /**
         * @summary `challenge`.
         * @public
         * @readonly
         */
        readonly challenge: IA5String
    ) {}

    /**
     * @summary Restructures an object into a PublicKeyAndChallenge
     * @description
     *
     * This takes an `object` and converts it to a `PublicKeyAndChallenge`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicKeyAndChallenge`.
     * @returns {PublicKeyAndChallenge}
     */
    public static _from_object(
        _o: { [_K in keyof PublicKeyAndChallenge]: PublicKeyAndChallenge[_K] }
    ): PublicKeyAndChallenge {
        return new PublicKeyAndChallenge(_o.spki, _o.challenge);
    }
}
/* END_OF_SYMBOL_DEFINITION PublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PublicKeyAndChallenge */
/**
 * @summary The Leading Root Component Types of PublicKeyAndChallenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PublicKeyAndChallenge: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "spki",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "challenge",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PublicKeyAndChallenge */
/**
 * @summary The Trailing Root Component Types of PublicKeyAndChallenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PublicKeyAndChallenge: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PublicKeyAndChallenge */
/**
 * @summary The Extension Addition Component Types of PublicKeyAndChallenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PublicKeyAndChallenge: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKeyAndChallenge */
let _cached_decoder_for_PublicKeyAndChallenge: $.ASN1Decoder<PublicKeyAndChallenge> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _decode_PublicKeyAndChallenge */
/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyAndChallenge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKeyAndChallenge} The decoded data structure.
 */
export function _decode_PublicKeyAndChallenge(el: _Element) {
    if (!_cached_decoder_for_PublicKeyAndChallenge) {
        _cached_decoder_for_PublicKeyAndChallenge = function (
            el: _Element
        ): PublicKeyAndChallenge {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PublicKeyAndChallenge contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "spki";
            sequence[1].name = "challenge";
            let spki!: SubjectPublicKeyInfo;
            let challenge!: IA5String;
            spki = _decode_SubjectPublicKeyInfo(sequence[0]);
            challenge = $._decodeIA5String(sequence[1]);
            return new PublicKeyAndChallenge(spki, challenge);
        };
    }
    return _cached_decoder_for_PublicKeyAndChallenge(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKeyAndChallenge */
let _cached_encoder_for_PublicKeyAndChallenge: $.ASN1Encoder<PublicKeyAndChallenge> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _encode_PublicKeyAndChallenge */
/**
 * @summary Encodes a(n) PublicKeyAndChallenge into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyAndChallenge, encoded as an ASN.1 Element.
 */
export function _encode_PublicKeyAndChallenge(
    value: PublicKeyAndChallenge,
    elGetter: $.ASN1Encoder<PublicKeyAndChallenge>
) {
    if (!_cached_encoder_for_PublicKeyAndChallenge) {
        _cached_encoder_for_PublicKeyAndChallenge = function (
            value: PublicKeyAndChallenge,
            elGetter: $.ASN1Encoder<PublicKeyAndChallenge>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SubjectPublicKeyInfo(
                            value.spki,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeIA5String(
                            value.challenge,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PublicKeyAndChallenge(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PublicKeyAndChallenge */

/* eslint-enable */
