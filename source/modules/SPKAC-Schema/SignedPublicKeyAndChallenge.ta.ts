/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    PublicKeyAndChallenge,
    _decode_PublicKeyAndChallenge,
    _encode_PublicKeyAndChallenge,
} from "../SPKAC-Schema/PublicKeyAndChallenge.ta";

/* START_OF_SYMBOL_DEFINITION SignedPublicKeyAndChallenge */
/**
 * @summary SignedPublicKeyAndChallenge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedPublicKeyAndChallenge ::= SEQUENCE
 *     {
 *     publicKeyAndChallenge PublicKeyAndChallenge,
 *     signatureAlgorithm AlgorithmIdentifier{SIGNATURE-ALGORITHM,
 *                                 {SignatureAlgorithms}},
 *     signature BIT STRING
 *     }
 * ```
 *
 * @class
 */
export class SignedPublicKeyAndChallenge {
    constructor(
        /**
         * @summary `publicKeyAndChallenge`.
         * @public
         * @readonly
         */
        readonly publicKeyAndChallenge: PublicKeyAndChallenge,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SignedPublicKeyAndChallenge
     * @description
     *
     * This takes an `object` and converts it to a `SignedPublicKeyAndChallenge`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignedPublicKeyAndChallenge`.
     * @returns {SignedPublicKeyAndChallenge}
     */
    public static _from_object(
        _o: {
            [_K in keyof SignedPublicKeyAndChallenge]: SignedPublicKeyAndChallenge[_K];
        }
    ): SignedPublicKeyAndChallenge {
        return new SignedPublicKeyAndChallenge(
            _o.publicKeyAndChallenge,
            _o.signatureAlgorithm,
            _o.signature
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SignedPublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedPublicKeyAndChallenge */
/**
 * @summary The Leading Root Component Types of SignedPublicKeyAndChallenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignedPublicKeyAndChallenge: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "publicKeyAndChallenge",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signatureAlgorithm",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedPublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedPublicKeyAndChallenge */
/**
 * @summary The Trailing Root Component Types of SignedPublicKeyAndChallenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedPublicKeyAndChallenge: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedPublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedPublicKeyAndChallenge */
/**
 * @summary The Extension Addition Component Types of SignedPublicKeyAndChallenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedPublicKeyAndChallenge: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedPublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedPublicKeyAndChallenge */
let _cached_decoder_for_SignedPublicKeyAndChallenge: $.ASN1Decoder<SignedPublicKeyAndChallenge> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedPublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _decode_SignedPublicKeyAndChallenge */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedPublicKeyAndChallenge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedPublicKeyAndChallenge} The decoded data structure.
 */
export function _decode_SignedPublicKeyAndChallenge(el: _Element) {
    if (!_cached_decoder_for_SignedPublicKeyAndChallenge) {
        _cached_decoder_for_SignedPublicKeyAndChallenge = function (
            el: _Element
        ): SignedPublicKeyAndChallenge {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "SignedPublicKeyAndChallenge contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "publicKeyAndChallenge";
            sequence[1].name = "signatureAlgorithm";
            sequence[2].name = "signature";
            let publicKeyAndChallenge!: PublicKeyAndChallenge;
            let signatureAlgorithm!: AlgorithmIdentifier;
            let signature!: BIT_STRING;
            publicKeyAndChallenge = _decode_PublicKeyAndChallenge(sequence[0]);
            signatureAlgorithm = _decode_AlgorithmIdentifier(sequence[1]);
            signature = $._decodeBitString(sequence[2]);
            return new SignedPublicKeyAndChallenge(
                publicKeyAndChallenge,
                signatureAlgorithm,
                signature
            );
        };
    }
    return _cached_decoder_for_SignedPublicKeyAndChallenge(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedPublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedPublicKeyAndChallenge */
let _cached_encoder_for_SignedPublicKeyAndChallenge: $.ASN1Encoder<SignedPublicKeyAndChallenge> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedPublicKeyAndChallenge */

/* START_OF_SYMBOL_DEFINITION _encode_SignedPublicKeyAndChallenge */
/**
 * @summary Encodes a(n) SignedPublicKeyAndChallenge into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedPublicKeyAndChallenge, encoded as an ASN.1 Element.
 */
export function _encode_SignedPublicKeyAndChallenge(
    value: SignedPublicKeyAndChallenge,
    elGetter: $.ASN1Encoder<SignedPublicKeyAndChallenge>
) {
    if (!_cached_encoder_for_SignedPublicKeyAndChallenge) {
        _cached_encoder_for_SignedPublicKeyAndChallenge = function (
            value: SignedPublicKeyAndChallenge,
            elGetter: $.ASN1Encoder<SignedPublicKeyAndChallenge>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PublicKeyAndChallenge(
                            value.publicKeyAndChallenge,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.signatureAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignedPublicKeyAndChallenge(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedPublicKeyAndChallenge */

/* eslint-enable */
